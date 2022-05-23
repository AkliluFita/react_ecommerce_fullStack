import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken
);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

//
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTM4YTBmMGVlNDFhNmJmMGU2YTMyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzA1OTY2MywiZXhwIjoxNjM3MzE4ODYzfQ.lh5q5de1GA6oW2gclx6B84rMNPzZ9zDtGnSqXiJ6wNk";
