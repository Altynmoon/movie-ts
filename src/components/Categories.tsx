import { FC } from "react";
import { Category } from "../types/shopTypes";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { dividerClasses } from "@mui/material";
import { Childcategory } from "../components/ChildCategory";
type Props = {
  category: Category;
};

export const CategoryOne = styled("div")`
  display: inline-block;
  /* position: relative; */
  border: 1px solid gray;

  &:hover .drop {
    display: block;
    top: 0;
    position: absolute;
    height: 100%;
  }
`;
export const DropDownContent = styled("div")`
  display: none;
  position: absolute;
  left: 230px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const DropBtn = styled("div")`
  background-color: #5f5f5f9b;
  color: white;
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  width: 150px;
`;

export const Categories: FC<Props> = ({ category }) => {
  const navigate = useNavigate();
  return (
    <CategoryOne>
      <DropBtn>{category.name}</DropBtn>
      <DropDownContent className="drop">
        {category.childCategories.map((childCategory) => (
          <Childcategory key={childCategory.id} childCategory={childCategory} />
        ))}
      </DropDownContent>
    </CategoryOne>
  );
};
