import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../lib/supabase";
import { setProducts } from "../slices/productsSlice";
import { decode } from 'base64-arraybuffer'

export const useGetProducts = () => {
  const [loadingProduct, setloadingProduct] = useState(false);
  const products = useSelector(state => state.products.value);
  const dispatch = useDispatch();

  const getProducts = async () => {
    setloadingProduct(true);
    const { data } = await supabase.from('products').select('*').order('name');
    setloadingProduct(false);
    dispatch(setProducts(data));
  }

  return {
    products,
    getProducts,
    loadingProduct,
  }
};

export const useCreateProduct = () => {
  const [creatingProduct, setCreatingProduct] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
    image: '',
  });

  const isAValidProduct = () => (product.name !== '');

  const createProduct = async ({ image = null }) => {
    if (!isAValidProduct()) throw new Error('Invalid product');
    setCreatingProduct(true);

    if (image) {
      await supabase // TODO Validate error
        .storage
        .from('product')
        .upload(image.name, decode(image.base64), {
          contentType: 'image/jpg',
        });
        setProduct(prev => ({...prev, image: image.name}));
    }

    const productToUpload = image ? {...product, image: image.name} : product;
    await supabase.from('products').insert(productToUpload);
    setCreatingProduct(false);
  }

  const getFileNameByUri = (uri = 'no-name.jpg') => {
    const splitterUri = uri.split('/');
    return splitterUri[splitterUri.length - 1];
  }

  return {
    product,
    setProduct,
    createProduct,
    creatingProduct,
    getFileNameByUri
  }
};

export const useGetProductImage = () => {
  const getProductImage = async (name = 'no-image.png') => {
    const { data } = await supabase.storage.from('product').download(name);
    return data;
  }

  return { getProductImage };
};

export const useUploadProductImage = () => {
  const uploadProductImage = async (name, image) => {
    const { data } = await supabase.storage.from('product').upload(name, image);
    return data;
  }

  return { uploadProductImage };
};
