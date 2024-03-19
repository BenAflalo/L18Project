import React, { useEffect, useState } from "react";
import { roomServiece } from "../services/roomService";

const Products = ({ product }) => {
  const [onOff, setOnOff] = useState(product.on);

  const changeColor = () => {
    setOnOff(!onOff);
    updateRoom();
  };
  const updateRoom = () => {
    const currRoom = roomServiece.getCurrentRoom();
    const oldProducts = currRoom.products;
    const updatedProducts = oldProducts.map((oldProduct) => {
      return oldProduct.id === product.id
        ? { ...oldProduct, on: !onOff }
        : oldProduct;
    });

    currRoom.products = updatedProducts;
    roomServiece.updateRoom(currRoom.id, currRoom);
    roomServiece.saveRoom(currRoom);
  };

  return (
    <div
      onClick={() => changeColor()}
      style={{ backgroundColor: onOff ? "green" : "red" }}
      className="product"
    >
      {product.productName}
    </div>
  );
};

export default Products;
