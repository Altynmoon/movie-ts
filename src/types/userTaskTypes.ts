export enum UserTaskActionType {
  FETCH_USERS_TASK = "FETCH_USERS_TASK ",
  FETCH_USERS_TASK_SUCCESS = " FETCH_USERS_TASK_SUCCESS",
  FETCH_USERS_TASK_REJECT = "FETCH_USERS_TASK_REJECT",
}
export type UserTask = {
  clientId: string;
  clientName: string;
  createTimestamp: string;
  plannedEndTime: string;
  plannedStartTime: string;
  taskId: string;
  taskTypeId: number;
  taskTypeName: string;
};
export type Stage = {
  items: UserTask[];
  stage: string;
  stageName: string;
};
export type UserTaskState = {
  usersTask: Stage[];
  loading: boolean;
  error?: string;
};

export type FetcUserTaskAction = {
  type: UserTaskActionType.FETCH_USERS_TASK;
};
export type FetchUserTaskSuccessAction = {
  type: UserTaskActionType.FETCH_USERS_TASK_SUCCESS;
  payload: Stage[];
};
export type FetchUserTaskRejectAction = {
  type: UserTaskActionType.FETCH_USERS_TASK_REJECT;
  payload: string;
};

export type UserTaskAction =
  | FetcUserTaskAction
  | FetchUserTaskSuccessAction
  | FetchUserTaskRejectAction;
