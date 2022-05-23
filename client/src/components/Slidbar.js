import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Image = styled.img`
  height: 80%;
  border: 1px solid #d5f1e4;
  border-radius: 10px;
  background-color: #f2d9dd;
  box-shadow: 3px 3px 2px 0px rgba(86, 128, 69, 1);
`;

const InfoContainer = styled.div`
  border: 1px solid #ffb3bb;
  border-radius: 10px;
  flex: 1;
  height: 30%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px;
  /* background-color: #ffe6e0; */
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;
const Desc = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;
const Button = styled.button`
  width: 70px;
  height: 40px;
  margin-top: 20px;
`;

export default function Slidbar() {
  const [slideIndex, setSlideIndex] = useState(0);
  //  event function
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow style={{ left: "10px" }} onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button>Show me</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow style={{ right: "10px" }} onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}
