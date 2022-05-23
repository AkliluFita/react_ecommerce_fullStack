import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Info = styled.div`
  //we bring info div here b/c to use hover
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #32955b;
  opacity: 0;
  transition: 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 280px;
  height: 350px;
  position: relative;
  border-radius: 10px;

  &:hover ${Info} {
    opacity: 0.5;
  }
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Icon = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid black;
  margin-left: 7px;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: azure;
    transform: scale(1.1);
  }
`;

export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            {" "}
            {/* to the single product */}
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
}
