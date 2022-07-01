import { useEffect, useState } from "react";
import { Container, Grid, CircularProgress } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useShopAction } from "../hooks/useShopAction";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { Categories } from "../components/Categories";
import { styled } from "@mui/system";
export const ShopPage = () => {
  const { categories, error, loading } = useTypedSelector((state) => state.category);
  const { fetchProducts } = useShopAction();
  // const Li = styled("li")`
  //   margin: 10px;
  //   width: 300px;
  //   background-color: gray;
  //   padding: 10px;
  //   &:hover {
  //     color: red;
  //   }
  // `;

  useEffect(() => {
    console.log("hello");
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div>
      <ul style={{ listStyleType: "none", position: "relative" }}>
        {categories.map((category) => (
          <li>
            <Categories key={category.id} category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};
