import React from "react";
import { useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomProvider";
import { roomServiece } from "../services/roomService";

const Room = ({ room }) => {
  const { setRoom } = useRoom();
  const navigate = useNavigate();

  const saveingRoomInfo = () => {
    setRoom(room);
    roomServiece.saveRoom(room);
    navigate(`/room/${room.name}`);
  };

  return (
    <div
      onClick={() => saveingRoomInfo()}
      className="room-div"
      style={{ backgroundColor: room.color }}
    >
      <h2>{room.name}</h2>
    </div>
  );
};

export default Room;
