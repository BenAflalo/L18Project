import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { useRoom } from "../context/RoomProvider";
import { roomServiece } from "../services/roomService";
import Products from "../components/Products";

const RoomPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState(null);
  const { room, setBoolean, boolean, setRoom, rooms, setRooms } = useRoom();

  useEffect(() => {
    const thisRoom = roomServiece.getCurrentRoom();
    if (thisRoom) {
      setRoom(thisRoom);
    }
  }, []);
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      id: roomServiece.generateId(),
      on: false,
    });
  };

  const changeBoolean = () => {
    setBoolean(!boolean);
  };

  const AddingProduct = () => {
    const currRoom = roomServiece.getCurrentRoom();
    const stereoProduct = currRoom?.products.find(
      (product) => product.productName === "Stereo"
    );
    if (currRoom?.products.length === 5) {
      return alert("No more then 5 products per room");
    } else if (stereoProduct && product.productName === "Stereo") {
      return alert("Only one stereo per room");
    } else if (
      currRoom.type !== "Bathroom" &&
      product.productName === "Heater"
    ) {
      return alert("Heater can only be in bathroom");
    }
    currRoom.products.push(product);
    roomServiece.saveRoom(currRoom);
    setRoom(currRoom);
    roomServiece.updateRoom(currRoom.id, currRoom);
    setShowForm(false);
  };
  return (
    <div>
      <div className="products-div">
        <div className="room-details">
          <p>Room name: {room?.name}</p>
          <p>Room Type: {room?.type}</p>
        </div>
        {room?.products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      {!showForm ? (
        <Button onClick={() => setShowForm(true)} className={"product-btn"}>
          Add Product
        </Button>
      ) : (
        <div>
          <select
            id="productName"
            className="product-select"
            onClick={() => changeBoolean()}
            onChange={handleChange}
          >
            <option value="" disabled={boolean}>
              Choose product
            </option>
            <option value="stereo">Stereo</option>
            <option value="light">Light</option>
            <option value="air-Conditioner">Air Conditioner</option>
            <option value="heater">Heater</option>
          </select>
          <Button onClick={() => AddingProduct()} className={"product-btn"}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
