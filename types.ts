
export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  design?: string;
  material?: string;
  description?: string;
  color?: string;
  sizes?: string;
  rating?: number | string;
  category?: string;
  subcategory?: string;
}

export interface CartItem extends Product {
  qty: number;
}

export interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  categoryClicks: Record<string, number>;
  isCartOpen: boolean;
}

export type StoreAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; delta: number } }
  | { type: 'TOGGLE_WISHLIST'; payload: string }
  | { type: 'TRACK_CLICK'; payload: string }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'LOAD_PERSISTED'; payload: StoreState }
  | { type: 'CLEAR_CART' };
