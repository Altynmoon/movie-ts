import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActionCreator from "../store/actions/movieActionCreator";

export const useMovieAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(movieActionCreator, dispatch);
  }, [dispatch]);
};
