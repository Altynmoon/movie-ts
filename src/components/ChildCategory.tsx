import { useNavigate } from "react-router-dom";
import { ChildCategory } from "../types/shopTypes";
import { FC } from "react";
import { color, styled } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";
type Props = {
  childCategory: ChildCategory;
};

export const Row = styled("div")`
  padding: 10px;
 
  &:hover {
    color: red;
  }
`;
export const Childcategory: FC<Props> = ({ childCategory }) => {
  return <Row>{childCategory.name}</Row>;
};
