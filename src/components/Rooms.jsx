import React from "react";
import { useRoom } from "../context/RoomProvider";
import Room from "./Room";

const Rooms = () => {
  const { rooms } = useRoom();

  return (
    <div className="rooms-container">
      {rooms?.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
