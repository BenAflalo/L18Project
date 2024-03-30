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
      {room.name}
    </div>
  );
};

export default Room;
