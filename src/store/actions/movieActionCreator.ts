import { type } from "os";
import { Dispatch } from "react";
import { MovieActionType, MovieAction } from "../../types/moviesTypes";

// export const SET_MOVIES = "movies/set";
// export const SET_MOVIES_PAGE_INFO = "movies/setPageInfo";
// export const SET_MOVIES_QUERY = "movies/setQuery";
// export const SET_MOVIES_SORT_BY = "movies/setSortBy";
export type Arguments = {
  query: string | undefined;
  page: number;
  sort: string | undefined;
};
export const fetchMovies =
  ({ query = "", page = 1, sort = "" }: Arguments) =>
  (dispatch: Dispatch<MovieAction>) => {
    dispatch({ type: MovieActionType.FETCH_MOVIES });
    let method = "discover";
    if (query && query.length > 0) {
      method = "search";
    }
    fetch(
      `https://api.themoviedb.org/3/${method}/movie?sort_by=${sort}&api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate&query=${query}`,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: MovieActionType.SET_MOVIES, payload: data.results });
        dispatch({
          type: MovieActionType.SET_MOVIES_PAGE_INFO,
          payload: {
            page: data.page,
            total_pages: Math.min(data.total_pages, 500),
          },
        });
      });
  };
 