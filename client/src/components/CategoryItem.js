import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 4px;
  height: 70vh;
  position: relative;
  border-radius: 5px;
  ${mobile({ flexDirection: "column" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "300px" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  color: white;
`;
const Button = styled.button`
  background-color: white;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOPE NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}
