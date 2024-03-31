import React, { useEffect, useState } from "react";
import { roomServiece } from "../services/roomService";
import { useRoom } from "../context/RoomProvider";

const Products = ({ product }) => {
  const [onOff, setOnOff] = useState(product.on);
  const { setRooms } = useRoom();

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
    const updatedRooms = roomServiece.updateRoom(currRoom.id, currRoom);
    roomServiece.saveRoom(currRoom);

    setRooms(updatedRooms);
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
