import { Reducer } from "redux";
import { MovieAction, MovieActionType, MovieState } from "../../types/moviesTypes";
import { UserActionType } from "../../types/userTypes";

const initState: MovieState = {
  movies: [],
  loading: false,
  query: "",
  pageInfo: {
    page: 1,
    total_pages: 500,
  },
  sortBy: "popularity.desc",
};
export const movies: Reducer<MovieState, MovieAction> = (state =  initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case MovieActionType.FETCH_MOVIES:
      return { ...state, loading: true };

    case MovieActionType.SET_MOVIES_PAGE_INFO:
      return { ...state, pageInfo: action.payload };
    case MovieActionType.SET_MOVIES:
      return { ...state, movies: action.payload };
    case MovieActionType.SET_MOVIES_QUERY:
      return { ...state, query: action.payload };
    case MovieActionType.SET_MOVIES_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
