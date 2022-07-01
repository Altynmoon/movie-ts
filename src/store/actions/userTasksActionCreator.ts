import axios from "axios";
import { Dispatch } from "redux";
import { Stage, UserTaskAction, UserTaskActionType } from "../../types/userTaskTypes";

export const fetchUserTask = () => (dispatch: Dispatch<UserTaskAction>) => {
  dispatch({ type: UserTaskActionType.FETCH_USERS_TASK });
  axios
    .get("https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json")
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: UserTaskActionType.FETCH_USERS_TASK_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch(() => {
      dispatch({
        type: UserTaskActionType.FETCH_USERS_TASK_REJECT,
        payload: "error",
      });
    });
};
