import React, { useContext } from "react";
import { userContext } from "../App";

function ProductItem() {
  const user = useContext(userContext);

  return (
    <div>
      <h2>Welcome, {user}</h2>
      <p>This is your Product Item page.</p>
    </div>
  );
}

export default ProductItem;
