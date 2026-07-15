
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { StoreState, StoreAction } from './types';
import { storeReducer, initialState } from './reducer';
import { STORAGE_KEY } from './constants';

const AppContext = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'LOAD_PERSISTED', payload: { ...initialState, ...parsed } });
      } catch (e) {
        console.error("Failed to load store", e);
      }
    }
  }, []);

  useEffect(() => {
    const { isCartOpen, ...toPersist } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useStore must be used within AppProvider");
  return context;
};
