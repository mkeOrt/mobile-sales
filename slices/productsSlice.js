import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
    productToCreate: {
      name: '',
      price: '',
      quantity: '',
      barcode: '',
      image: null,
    }
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    setProductToCreateImage: (state, action) => {
      state.productToCreate.image = action.payload;
    },
  },
});

export const { setProducts, setProductToCreateImage } = productsSlice.actions;
export default productsSlice.reducer;
