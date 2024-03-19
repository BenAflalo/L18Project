import React from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import Rooms from "../components/Rooms";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Rooms />
      <div className="btn-div">
        <Button className={"btn-home"} onClick={() => navigate("/add-room")}>
          +
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
