import React, { useContext, useReducer } from 'react';
import { ADD_TO_CART } from '../actions';
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

  // add to cart
  const addToCart = (id, color, amount, product) => {
    console.log({ id, amount, color, product });
    dispatch({ type: ADD_TO_CART, payload: { id, amount, color, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
