// redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  imgUrl: string;
  prodName: string;
  actualPrice: number;
  msrp: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isDrawerOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isDrawerOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //  Add or update quantity if same ID exists
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.isDrawerOpen = true; // Open drawer on add
    },

    // Remove item by ID
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Update quantity by ID
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },

    // Clear cart completely
    clearCart: state => {
      state.items = [];
    },

    // Toggle cart drawer visibility
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleDrawer,
} = cartSlice.actions;

export default cartSlice.reducer;
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     isDrawerOpen: false, // For drawer toggle
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = {
//         ...action.payload,
//         uniqueKey: `${action.payload.id}-${Date.now()}`, // Unique for same products
//       };
//       state.items.push(item);
//       state.isDrawerOpen = true;
//     },
//     toggleDrawer: (state, action) => {
//       state.isDrawerOpen = action.payload;
//     },
//     updateQuantity: (state, action) => {
//       const { uniqueKey, quantity } = action.payload;
//       const item = state.items.find(i => i.uniqueKey === uniqueKey);
//       if (item) item.quantity = quantity;
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(i => i.uniqueKey !== action.payload);
//     },
//   },
// });

// export const { addToCart, toggleDrawer, updateQuantity, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
