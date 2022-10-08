import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
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

    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;

      let tempProducts = [...filtered_products];

      if (sort === 'price-lowest') {
        // tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      }

      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }

      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return { ...state, filtered_products: tempProducts };
    }

    default: {
      throw new Error(`No matching "${action.type}" - action type`);
    }
  }
};

export default filter_reducer;
