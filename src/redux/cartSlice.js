import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    status: 'idle',
    error: null,
    },
    reducers: {
        addItem: (state, action) => {
            const { product, quantity  } = action.payload;
            const newItem = state.items.find(item => item.id === product.id);
            if (newItem) {
                newItem.quantity += quantity;
            } else {
              state.items.push({ ...product, quantity: quantity });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart');
            console.log(JSON.parse(localStorage.getItem('cart')))
        },
        changeQuantity: (state, action) => {
            const { id, changeQ } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (item.quantity === 1 && changeQ < 0){
                return;
                }
                item.quantity += changeQ;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
          },
  }
});

export const { addItem, removeItem, clearCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;