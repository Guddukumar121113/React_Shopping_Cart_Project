import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
import products from "./products";
import ContextCart from "./ContextCart";
import reducer from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
