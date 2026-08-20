
import React from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../AppContext';

const CartDrawer: React.FC = () => {
  const { state, dispatch } = useStore();
  const totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!state.isCartOpen) return null;

  const handleClose = () => dispatch({ type: 'SET_CART_OPEN', payload: false });

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] md:max-w-md bg-white z-[70] shadow-2xl slide-in flex flex-col">
        <div className="p-4 md:p-6 border-b flex justify-between items-center bg-[#5b0f0f] text-white">
          <h2 className="text-xl font-bold font-serif-display">Your Cart</h2>
          <button onClick={handleClose} className="p-2 hover:scale-110 transition-transform" aria-label="Close Cart">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {state.cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 py-16">
              <ShoppingBag className="w-16 h-16 opacity-20 stroke-[1.5]" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button 
                onClick={handleClose}
                className="bg-[#5b0f0f] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest shadow-lg"
              >
                Explore Archives
              </button>
            </div>
          ) : (
            state.cart.map((item) => {
              const itemKey = item.cartItemId || `${item.id}_${item.selectedSize || 'M'}`;
              return (
                <div key={itemKey} className="flex gap-4 p-3 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.name} className="w-20 h-28 object-cover rounded-xl" />
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-[#5b0f0f] text-sm leading-tight uppercase tracking-tight line-clamp-1">{item.name}</h3>
                        <span className="bg-[#5b0f0f]/10 text-[#5b0f0f] text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider whitespace-nowrap">
                          {item.selectedSize || 'M'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-4 border border-gray-100 rounded-lg px-3 py-1 bg-gray-50/50">
                        <button 
                          onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: itemKey, delta: -1 } })}
                          className="text-gray-400 hover:text-[#5b0f0f] font-bold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-black text-xs w-4 text-center">{item.qty}</span>
                        <button 
                          onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: itemKey, delta: 1 } })}
                          className="text-gray-400 hover:text-[#5b0f0f] font-bold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: itemKey })}
                        className="text-red-400 text-[10px] font-black uppercase tracking-widest hover:text-red-600 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {state.cart.length > 0 && (
          <div className="p-6 border-t bg-white space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Total Selection Value</span>
              <span className="font-serif-display font-black text-[#5b0f0f] text-2xl">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button 
              className="w-full bg-[#5b0f0f] text-white py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:bg-black shadow-xl transition-all active:scale-95"
              onClick={() => {
                alert("Proceeding to payment gateway...");
                dispatch({ type: 'CLEAR_CART' });
                handleClose();
              }}
            >
              Initiate Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
