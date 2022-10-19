import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';

const initialState = {
  cart: [],
  total_items: 12,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
