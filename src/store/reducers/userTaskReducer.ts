import { Action } from "history";
import { Reducer } from "redux";
import { UserTaskState, UserTaskAction } from "../../types/userTaskTypes";
import { UserTaskActionType } from "../../types/userTaskTypes";
const initState: UserTaskState = {
  usersTask: [],
  loading: false,
};
export const userTaskReducer: Reducer<UserTaskState, UserTaskAction> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case UserTaskActionType.FETCH_USERS_TASK:
      return { ...state, loading: true };
    case UserTaskActionType.FETCH_USERS_TASK_SUCCESS:
      return { ...state, usersTask: action.payload, loading: false };
    case UserTaskActionType.FETCH_USERS_TASK_REJECT:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
