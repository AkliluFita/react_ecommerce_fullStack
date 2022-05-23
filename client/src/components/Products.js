import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
// import { popularProducts } from "../data";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  //   use effect to get the all products
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : `http://localhost:5000/api/products` //   b/c some products do not have categories
      );
      setProducts(res.data);
      console.log(res.data);
    };

    getProducts();
  }, [cat]);

  //   user effect for  filter product
  useEffect(() => {
    cat &&
      setFilteredProduct(
        products.filter((el) =>
          Object.entries(filters).every(([key, value]) =>
            el[key].includes(value)
          )
        )
      );
  }, [filters, cat, products]);

  //   user effect for  sort(with time ,price and latest)
  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProduct.map((item) => <Product key={item._id} item={item} />)
        : products
            .slice(0, 8) // only display 1-8 products
            .map((item) => <Product key={item._id} item={item} />)}
    </Container>
  );
}
