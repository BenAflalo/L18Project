import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { roomServiece } from "../services/roomService";
import { useRoom } from "../context/RoomProvider";

const AddRoom = () => {
  const { room, setRoom, boolean, setBoolean, setRooms } = useRoom();
  const navigate = useNavigate();

  const changeBoolean = () => {
    setBoolean(!boolean);
  };
  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.id]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room?.name && !room?.type) {
      alert("Error");
      navigate("/");
    } else {
      if (!roomServiece.colors.includes(room.color)) {
        alert("Color is not in the system. Please choose another");
      } else {
        roomServiece.createRoom(room);
        setRooms(roomServiece.getAllRooms());
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="create-room" onSubmit={handleSubmit}>
          <select
            id="type"
            className="form-select"
            onClick={() => changeBoolean()}
            onChange={handleChange}
          >
            <option value="" disabled={boolean}>
              Choose room
            </option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="sleeping-room">Sleeping room</option>
          </select>
          <input
            type="text"
            id="name"
            placeholder="Room name"
            className="form-input"
            maxLength="9"
            onChange={handleChange}
          />
          <input
            type="text"
            id="color"
            placeholder="Room color"
            className="form-input"
            onChange={handleChange}
          />
          <Button className={"form-btn"}>Create</Button>
        </form>
      </div>
    </>
  );
};

export default AddRoom;
