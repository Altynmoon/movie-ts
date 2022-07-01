import { Reducer } from "redux";
import { ProductAction, ShopActionType, ProductState } from "../../types/shopTypes";

const initState: ProductState = {
  categories: [],
  loading: false,
  query: "",
  pageInfo: {
    page: 1,
    total_pages: 500,
  },
  sortBy: "",
};
export const shopReducer: Reducer<ProductState, ProductAction> = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ShopActionType.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case ShopActionType.SET_PRODUCTS:
      return { ...state, categories: action.payload, loading: false };

    default:
      return state;
  }
};
