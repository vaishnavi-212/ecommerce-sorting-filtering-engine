
import { StoreState, StoreAction, CartItem } from './types';

export const initialState: StoreState = {
  cart: [],
  wishlist: [],
  categoryClicks: {},
  isCartOpen: false,
};

export function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case 'LOAD_PERSISTED':
      return { ...action.payload, isCartOpen: false };
    case 'SET_CART_OPEN':
      return { ...state, isCartOpen: action.payload };
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.id === action.payload.id);
      const newCart = existing 
        ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        : [...state.cart, { ...action.payload, qty: 1 }];
      
      return {
        ...state,
        cart: newCart,
        isCartOpen: true,
        categoryClicks: {
          ...state.categoryClicks,
          [action.payload.category || 'general']: (state.categoryClicks[action.payload.category || 'general'] || 0) + 7
        }
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QTY':
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload.id) {
            const newQty = Math.max(0, item.qty + action.payload.delta);
            return { ...item, qty: newQty };
          }
          return item;
        }).filter(item => item.qty > 0),
      };
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.payload);
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter(id => id !== action.payload)
          : [...state.wishlist, action.payload],
      };
    }
    case 'TRACK_CLICK':
      return {
        ...state,
        categoryClicks: {
          ...state.categoryClicks,
          [action.payload]: (state.categoryClicks[action.payload] || 0) + 1,
        },
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
}
