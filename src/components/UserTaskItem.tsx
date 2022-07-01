import { FC } from "react";
import { Stage } from "../types/userTaskTypes";
import { TasksList } from "../components/TasksList";
import { useDrop } from "react-dnd";
//////COLUMN
type Props = {
  stage: Stage;
};
export const UserTaskItem: FC<Props> = ({ stage }) => {
  // const ItemTypes = {
  //   CARD: "card",
  // };

  // const [{ isOver, canDrop }, dropRef] = useDrop({
  //   accept: ItemTypes.CARD,
  //   drop: (item) => {
  //     const from = item;
  //     const to = { stage };
  //     handleMoveMyTask(from, to);
  //   },
  //   canDrop: (stage) => stage !== stage,
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // });
  return (
    <div style={{ marginTop: "50px" }}>
      <div
        style={{
          width: "250px",
          textAlign: "center",
          margin: "10px",
          height: "150px",
        }}>
        <div style={{ borderBottom: "1px solid black" }}>{stage.stageName}</div>
        {stage.items.map((stage) => (
          <TasksList key={stage.clientId} items={stage} />
        ))}
      </div>
    </div>
  );
};
function handleMoveMyTask(from: unknown, to: { stage: Stage }) {
  throw new Error("Function not implemented.");
}
