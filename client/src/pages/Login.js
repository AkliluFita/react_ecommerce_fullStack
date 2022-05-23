import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  border: 1px solid #ffb3bb;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  border: 1px solid #ffb3bb;
  border-radius: 10px;
  width: 40%;
  padding: 20px;
  background-color: #ffe6e0;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${mobile({ width: "70%" })}
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
  border-radius: 5px;
  border: 1px solid grey;
`;

const Button = styled.button`
  width: 30%;
  margin-top: 20px;
  padding: 10px;
  background-color: #32955b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  text-decoration: underline;
  color: green;
  margin-top: 5px;
`;

const Error = styled.span`
  color: red;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login Form</Title>
        <Form>
          <Input
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={handleLogin} disabled={isFetching}>
          Login
        </Button>
        {error && <Error>invalid password or username</Error>}
        <Link>Do note remember the password</Link>
        <Link>go back to create password</Link>
      </Wrapper>
    </Container>
  );
}
