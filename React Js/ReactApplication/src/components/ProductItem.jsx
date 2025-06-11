import React, { useContext } from "react";
import ProductDetails from "./ProductDetails";
import { userContext } from "../App";

const ProductItem = ({ product }) => {
  let { user } = useContext(userContext);
  return (
    <div>
      <h1
        style={{
          background: "linear-gradient(to right, red, yellow)",
          color: "white",
          padding: "10px",
        }}
      >
        poduct items
      </h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>serial no</th>
            <th>product Name</th>
            <th>Price</th>
            <th>Product Discripsition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.serialNO}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.descripsition}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductItem;
