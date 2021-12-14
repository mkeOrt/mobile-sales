import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../lib/supabase";
import { setProducts } from "../slices/productsSlice";

export const useGetProducts = () => {
  const products = useSelector(state => state.products.value);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('name');
    dispatch(setProducts(data));
  }

  return {
    products,
    getProducts,
  }
};
