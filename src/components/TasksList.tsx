import { FC, useState } from "react";
import { UserTask } from "../types/userTaskTypes";
import moment from "moment";
import { padding, styled } from "@mui/system";
import Draggable from "react-draggable";
import { Popover, Button, Typography } from "@mui/material";
import React from "react";

type Props = {
  items: UserTask;
};
const ItemList = styled("div")`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 12px 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #918d8d3d;
  }
`;
export const TasksList: FC<Props> = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    // <Draggable>
    // onClick={handleClick}
    <ItemList>
      <p style={{ fontSize: "12px", lineHeight: "14px", color: "#3b3b3b6b" }}>
        {moment(items.createTimestamp).format("DD MMMM в HH:mm")}
      </p>
      {items.taskTypeName}
      <p>{items.clientName}</p>

      {/* <Popover
        id={`task-item-${items.taskTypeId}`}
        open={true}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover> */}
    </ItemList>
    // </Draggable>
  );
};
