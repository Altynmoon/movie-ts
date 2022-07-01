import { FC } from "react";
import { Movie } from "../types/moviesTypes";
// import styled from "styled-components";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
type Props = {
  movie: Movie;
};

export const Box = styled("div")<{ imageUrl: string }>`
  width: 100%;
  height: 440px;
  background-image: ${(props) => `url("https://image.tmdb.org/t/p/original${props.imageUrl}");`};
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%);
  }
  color: white;
`;

export const Title = styled("span")`
  font-weight: 500;
  font-size: 24px;
  z-index: 1;
`;
export const Stars = styled("div")`
  z-index: 1;
  font-size: 12px;
  margin-bottom: 16px;
`;

export const MovieItem: FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Box imageUrl={movie.poster_path} onClick={() => navigate("/movies/" + movie.id)}>
      <Title>{movie.title}</Title>
      <Stars>{movie.vote_average}</Stars>
    </Box>
  );
};
