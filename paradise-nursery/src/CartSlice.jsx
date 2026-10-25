import { createSlice } from '@reduxjs/toolkit';

// Each cart item contains id, name, price, image, and quantity.
const initialState = { items: [] };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        // Preserve a single line per product; the product listing button is disabled once added.
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(entry => entry.id === id);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter(entry => entry.id !== id);
      } else {
        item.quantity = Math.max(1, Math.floor(quantity));
      }
    }
  }
});
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;
