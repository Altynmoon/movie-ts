import { useEffect } from "react";
import { Container, Grid, CircularProgress } from "@mui/material";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useUserTaskAction } from "../hooks/useUserTaskAction";
import { UserTaskItem } from "../components/UserTaskItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function UsersTask() {
  const { usersTask, loading, error } = useTypedSelector((state) => state.userTask);
  const { fetchUserTask } = useUserTaskAction();
  useEffect(() => {
    fetchUserTask();
  }, [fetchUserTask]);

  console.log(usersTask);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div style={{ display: "flex" }}>
      <DndProvider backend={HTML5Backend}>
        {usersTask.map((userTask) => (
          <UserTaskItem key={userTask.stage} stage={userTask} />
        ))}
      </DndProvider>
    </div>
  );
}
