import React, { createContext, useContext, useState } from "react";
import { roomServiece } from "../services/roomService";

const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [boolean, setBoolean] = useState(false);
  const [room, setRoom] = useState(null);
  const [rooms, setRooms] = useState(roomServiece.getAllRooms());

  const value = { setRoom, room, setRooms, rooms, boolean, setBoolean };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export default RoomProvider;

export const useRoom = () => useContext(RoomContext);
