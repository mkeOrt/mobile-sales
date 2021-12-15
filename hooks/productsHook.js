import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../lib/supabase";
import { setProducts } from "../slices/productsSlice";

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
  });

  const isAValidProduct = () => (product.name !== '');

  const createProduct = async () => {
    if (!isAValidProduct()) throw new Error('Invalid product');
    setCreatingProduct(true);
    await supabase.from('products').insert(product);
    setCreatingProduct(false);
  }

  return {
    product,
    setProduct,
    createProduct,
    creatingProduct,
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
