import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: #f1e4e4;
  height: 60px;
  width: 100%;
  background-color: #cf6e86;
  position: fixed;
  z-index: 2;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
// left style
const Left = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ flex: "3" })}
`;

// center style
const Center = styled.div`
  flex: 1;
  display: flex;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  margin-left: 20px;
`;
const Inputs = styled.input`
  border: none;
  flex: 8;
`;
// right style
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center" })};
`;
const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ marginLeft: "10px", fontSize: "10px" })};
`;

export default function Navbar() {
  // const cart = useSelector((state) => state.cart);  // all cart object({product:[], quantity:0, total:0})
  const quantity = useSelector((state) => state.cart.quantity); // initial = 0
  console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Abdu</Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Inputs placeholder="search" />
            <SearchIcon />
          </SearchContainer>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon color="action" style={{ color: "white" }} />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
