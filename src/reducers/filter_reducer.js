import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
} from '../actions';

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

    case UPDATE_SORT: {
      return { ...state, sort: payload };
    }

    default: {
      throw new Error(`No matching "${action.type}" - action type`);
    }
  }
};

export default filter_reducer;
