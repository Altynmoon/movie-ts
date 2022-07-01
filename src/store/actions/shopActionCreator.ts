import { type } from "os";
import { Dispatch } from "react";
import { ShopActionType, ProductAction } from "../../types/shopTypes";
// export type Arguments = {
//   query: string | undefined;
//   page: number;
//   sort: string | undefined;
// };
export const fetchProducts = () => (dispatch: Dispatch<ProductAction>) => {
  dispatch({ type: ShopActionType.FETCH_PRODUCTS });
  return fetch(`https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      dispatch({ type: ShopActionType.SET_PRODUCTS, payload: data });

      dispatch({
        type: ShopActionType.SET_PRODUCTS_PAGE_INFO,
        payload: {
          page: data.page,
          total_pages: 30,
        },
      });
    });
};
