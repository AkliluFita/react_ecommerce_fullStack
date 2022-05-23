import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-top: 5px;
`;
const Desc = styled.h3`
  padding-bottom: 10px;
  ${mobile({ alignItem: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 3px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: #32955b;
  border-radius: 5px;
  cursor: pointer;
`;

export default function NewsLetters() {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Date Time updated ,please send your email and contact to us</Desc>
      <InputContainer>
        <Input></Input>

        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
