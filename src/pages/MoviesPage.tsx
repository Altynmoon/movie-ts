import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";

import { MovieItem } from "../components/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useMovieAction } from "../hooks/useMovieAction";
import { MovieActionType, SET_MOVIES_PAGE_INFO } from "../types/moviesTypes";
import { FC } from "react";

export const MoviesPage: FC = () => {
  const { movies, query, pageInfo, sortBy } = useTypedSelector((state) => state.movie);
  const { fetchMovies } = useMovieAction();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies({ query: "", page: 1, sort: "" });
  }, [fetchMovies]);

  const setSortBy = useCallback(
    (payload: string) => {
      dispatch({ type: MovieActionType.SET_MOVIES_SORT_BY, payload });
    },
    [dispatch],
  );
  const setQuery = useCallback(
    (payload: string) => {
      dispatch({ type: MovieActionType.SET_MOVIES_QUERY, payload });
    },
    [dispatch],
  );
  const searchMovies = useCallback(
    ({ page = 1, sort = sortBy } = {}) => {
      fetchMovies({ page, sort, query });
    },
    [dispatch, query, sortBy],
  );

  return (
    <Container maxWidth="xl">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Movies</h1>
        <div style={{ marginLeft: "auto", flexGrow: 1, maxWidth: "300px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort by"
              onChange={(e) => {
                setSortBy(e.target.value);
                searchMovies({ sort: e.target.value });
              }}
              size="small">
              <MenuItem value="popularity.desc">Popularity</MenuItem>
              <MenuItem value="release_date.desc">Release Date</MenuItem>
              <MenuItem value="vote_average.desc">Rating</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
            label="Search"
          />
          <Button onClick={() => searchMovies()}>Search</Button>
        </div>
      </div>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3}>
            <MovieItem key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={pageInfo.total_pages}
        page={pageInfo.page}
        onChange={(e, value) => searchMovies({ page: value })}
      />
    </Container>
  );
};
function setSortBy(value: string) {
  throw new Error("Function not implemented.");
}
