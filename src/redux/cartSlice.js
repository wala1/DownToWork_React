import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total += action.payload.prodPrice;
            
        },
        removeProduct: (state, action) => {
            const index = state.products.findIndex(
              (product) => product._id === action.payload.productId
            );
            if (index !== -1) {
              state.quantity -= 1;
              state.total -= state.products[index].prodPrice;
              state.products.splice(index, 1);
            }
          }
      
    }
   
});
export const { addProduct,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
