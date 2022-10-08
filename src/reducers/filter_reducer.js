import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions';

const filter_reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
      };
    }

    case SET_GRIDVIEW: {
      return { ...state, grid_view: true };
    }
    case SET_LISTVIEW: {
      return { ...state, grid_view: false };
    }

    default: {
      throw new Error(`No matching "${action.type}" - action type`);
    }
  }
};

export default filter_reducer;
