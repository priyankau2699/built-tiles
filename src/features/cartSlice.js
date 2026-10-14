
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    wishlist: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    toggleWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.wishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.wishlist.push(product);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleWishlist,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
