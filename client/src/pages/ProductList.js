import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetters from "../components/NewsLetters";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";

const Container = styled.div`
  box-sizing: border-box;
`;
const Title = styled.h1`
  margin: 20px;
  top: 100px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ffb3bb;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  ${mobile({ flexDirection: "column", marginTop: "10px" })};
`;
const Filter = styled.span`
  display: flex;
  ${mobile({ marginTop: "10px" })};
`;
const Filtertext = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;
const Select = styled.select`
  margin-left: 20px;
  padding: 5px;
`;
const Option = styled.option``;

export default function ProductList() {
  const history = useLocation();
  //   console.log(history); //pathname => e.g "/product/woman"
  //   console.log(history.pathname.split("/")[2]); // e.g woman
  const cat = history.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  // functions
  const handleFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({ ...filters, [name]: value });
  };

  console.log(filters);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <hr style={{ marginTop: "60px" }}></hr>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <Filtertext>Filter product</Filtertext>
          <Select name="color" onChange={handleFilter}>
            <Option disable>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disable>Size</Option>
            <Option>XS</Option>
            <Option>X</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <Filtertext>Sort product</Filtertext>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Newest" disable>
              Newest
            </Option>
            <Option value="asc">asc</Option>
            <Option value="des">des</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} cat={cat} sort={sort} />
      <NewsLetters />
      <Footer />
    </Container>
  );
}
