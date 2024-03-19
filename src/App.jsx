import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddRoom from "./pages/AddRoom";
import RoomProvider from "./context/RoomProvider";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <>
      <RoomProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/room" element={<RoomPage />} />
        </Routes>
      </RoomProvider>
    </>
  );
}

export default App;
