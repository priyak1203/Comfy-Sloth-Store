import { LOAD_PRODUCTS } from '../actions';

const filter_reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
      };
    }

    default: {
      throw new Error(`No matching "${action.type}" - action type`);
    }
  }
};

export default filter_reducer;
