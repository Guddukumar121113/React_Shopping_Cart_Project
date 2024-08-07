const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        item: state.item.filter((curElem) => curElem.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, item: [] };

    case "INCREMENT":
      const incrementedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, item: incrementedCart };

    case "DECREMENT":
      const decrementedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload && curElem.quantity > 0) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      });
      return { ...state, item: decrementedCart };

    case "GET_TOTAL":
      const { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          const { price, quantity } = curVal;
          const updatedTotalAmount = price * quantity;

          accum.totalAmount += updatedTotalAmount;
          accum.totalItem += quantity;

          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };

    default:
      return state;
  }
};

export default reducer;
