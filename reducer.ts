
import { StoreState, StoreAction, CartItem, Product } from './types';
import { getAvailableSizes } from './utils';

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
      let product: Product;
      let requestedSize: string | undefined;

      if ('product' in action.payload) {
        product = action.payload.product;
        requestedSize = action.payload.size;
      } else {
        product = action.payload;
        requestedSize = action.payload.selectedSize;
      }

      const availableSizes = getAvailableSizes(product);
      const chosenSize = requestedSize || product.selectedSize || availableSizes[0] || 'M';
      const cartItemId = `${product.id}_${chosenSize}`;

      const existingIndex = state.cart.findIndex(
        item => (item.cartItemId || `${item.id}_${item.selectedSize}`) === cartItemId
      );

      let newCart: CartItem[];
      if (existingIndex > -1) {
        newCart = state.cart.map((item, idx) =>
          idx === existingIndex ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        newCart = [
          ...state.cart,
          {
            ...product,
            selectedSize: chosenSize,
            cartItemId,
            qty: 1,
          },
        ];
      }
      
      return {
        ...state,
        cart: newCart,
        isCartOpen: true,
        categoryClicks: {
          ...state.categoryClicks,
          [product.category || 'general']: (state.categoryClicks[product.category || 'general'] || 0) + 7
        }
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => {
          const key = item.cartItemId || `${item.id}_${item.selectedSize}`;
          return key !== action.payload && item.id !== action.payload;
        }),
      };
    case 'UPDATE_QTY':
      return {
        ...state,
        cart: state.cart.map(item => {
          const key = item.cartItemId || `${item.id}_${item.selectedSize}`;
          if (key === action.payload.id || item.id === action.payload.id) {
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
