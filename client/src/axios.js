import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTM4YTBmMGVlNDFhNmJmMGU2YTMyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzc1MDY2MCwiZXhwIjoxNjM4MTgyNjYwfQ.i8RvUmJH28I9j0DGaulau6ghD6dKHcok8DEtiZwdCls";

console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken
);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
