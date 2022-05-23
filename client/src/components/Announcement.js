import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #3d3636;
  height: 30px;
  background-color: #c9f5bb;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export default function Announcement() {
  return (
    <Container>
      Hello Dear: you can get 30% discount shopping product with high quality
    </Container>
  );
}
