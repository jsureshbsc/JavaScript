import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product, setProduct] = useState({
    serialNO: 1,
    name: "water bottle",
    price: 100,
    descripsition: "storing water bottle",
  });
  return (
    <>
      <h1>Welcom to Shop </h1>
      <ProductItem product={product} />
    </>
  );
};

export default Shop;
