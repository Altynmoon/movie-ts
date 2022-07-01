import { Url } from "url";

export enum MovieActionType {
  FETCH_MOVIES = " FETCH_MOVIES",
  SET_MOVIES = "SET_MOVIES",
  SET_MOVIES_PAGE_INFO = "SET_MOVIES_PAGE_INFO",
  // FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  // FETCH_USERS_REJECT = "FETCH_USERS_REJECT",
  SET_MOVIES_QUERY = "SET_MOVIES_QUERY",
  SET_MOVIES_SORT_BY = "SET_MOVIES_SORT_BY",
}
export type Movie = {
  id?: number;
  title?: string;
  image?: string;
  page?: number;
  poster_path: string;
  vote_average: number;
  total_pages: number;
};
export type MovieState = {
  movies: Movie[];
  loading: boolean;
  error?: boolean;
  query?: string;
  sortBy?: string;
  pageInfo: {
    page: number;
    total_pages: number;
  };
};
export type SET_MOVIES = {
  type: MovieActionType.SET_MOVIES;
  payload: Movie[];
};

export type FetchMovieAction = {
  type: MovieActionType.FETCH_MOVIES;
};
export type SET_MOVIES_QUERY = {
  type: MovieActionType.SET_MOVIES_QUERY;
  payload: string;
};
export type SET_MOVIES_SORT_BY = {
  type: MovieActionType.SET_MOVIES_SORT_BY;
  payload: string;
};

export type SET_MOVIES_PAGE_INFO = {
  type: MovieActionType.SET_MOVIES_PAGE_INFO;
  payload: {
    page: number;
    total_pages: number;
  };
};

export type MovieItemInfo = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: 0;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: null;
  original_language: number;
  original_title: string;
  overview: string;
  popularity: 1.063;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type MovieAction =
  | FetchMovieAction
  | SET_MOVIES_PAGE_INFO
  | SET_MOVIES
  | SET_MOVIES_QUERY
  | SET_MOVIES_SORT_BY;
