export enum ShopActionType {
  FETCH_PRODUCTS = " FETCH_PRODUCTS",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_PRODUCTS_PAGE_INFO = "SET_PRODUCTS_PAGE_INFO",
  // FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  // FETCH_USERS_REJECT = "FETCH_USERS_REJECT",
  SET_PRODUCTS_QUERY = "SET_PRODUCTS_QUERY",
  SET_PRODUCTS_SORT_BY = "SET_PRODUCTS_SORT_BY",
}
export type ChildCategory = {
  id: number;
  name: string;
  parentId?: number;
};
export type Category = {
  childCategories: ChildCategory[];
  id: number;
  name: string;
};
export type ProductState = {
  categories: Category[];
  loading: boolean;
  error?: boolean;
  query?: string;
  sortBy?: string;
  pageInfo: {
    page: number;
    total_pages: number;
  };
};
export type SET_PRODUCTS = {
  type: ShopActionType.SET_PRODUCTS;
  payload: Category[];
};

export type FetchShopAction = {
  type: ShopActionType.FETCH_PRODUCTS;
};

export type SET_PRODUCTS_PAGE_INFO = {
  type: ShopActionType.SET_PRODUCTS_PAGE_INFO;
  payload: {
    page: number;
    total_pages: number;
  };
};

export type ProductItemInfo = {
  // adult: boolean;
  // backdrop_path: string;
  // belongs_to_collection: null;
  // budget: 0;
  // genres: { id: number; name: string }[];
  // homepage: string;
  // id: number;
  // imdb_id: null;
  // original_language: number;
  // original_title: string;
  // overview: string;
  // popularity: 1.063;
  // poster_path: string;
  // production_companies: [];
  // production_countries: [];
  // release_date: string;
  // revenue: number;
  // runtime: number;
  // spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  // status: string;
  // tagline: string;
  // title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
};
export type ProductAction = FetchShopAction | SET_PRODUCTS_PAGE_INFO | SET_PRODUCTS;
