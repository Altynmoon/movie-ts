import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userTaskActionCreator from "../store/actions/userTasksActionCreator";

export const useUserTaskAction = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(userTaskActionCreator, dispatch);
  }, [dispatch]);
};
