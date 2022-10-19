import { ADD_TO_CART } from '../actions';

const cart_reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      console.log('Adding to Cart');

      return { ...state };
    }

    default: {
      throw new Error(`No matching "${type}" - action type`);
    }
  }
};

export default cart_reducer;
