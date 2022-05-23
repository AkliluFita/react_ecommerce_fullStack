import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  border: 1px solid #ffe6e0;
  border-radius: 10px;
  width: 40%;
  padding: 20px;
  background-color: #ffe6e0;

  display: flex;
  flex-direction: column;
  ${mobile({ width: "75%", minHeight: "320px" })}
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 90%;
  padding: 10px;
  flex: 1;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;
const Agreement = styled.span``;
const Button = styled.button`
  width: 30%;
  margin-top: 20px;
  padding: 10px;
  background-color: #32955b;
  border: none;
  border-radius: 5px;
  ${mobile({ width: "70%" })}
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Register Form</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="our name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="conferm password" />
        </Form>
        <Agreement>By creating an account i conferm the agreement</Agreement>
        <Button>Create Account</Button>
      </Wrapper>
    </Container>
  );
}
