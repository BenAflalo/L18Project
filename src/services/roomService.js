import ShortUniqueId from "short-unique-id";
import { storageService } from "./storageService";

const colors = [
  "Black",
  "White",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Gray",
  "Cyan",
  "Magenta",
];
function generateId(length = 10) {
  const { randomUUID } = new ShortUniqueId();
  return randomUUID(length);
}
function createRoom(room) {
  room.id = generateId();
  room.products = [];
  const totalRooms = storageService.getRooms();
  storageService.saveRooms([...totalRooms, room]);
}
function getAllRooms() {
  const allRooms = storageService.getRooms();
  return allRooms;
}
function saveRoom(room) {
  storageService.saveCurrentRoom(room);
}
function getCurrentRoom() {
  const currRoom = storageService.getCurrentRoom();
  return currRoom;
}
function updateRoom(id, updatedRoom) {
  const allRooms = storageService.getRooms();
  const updatedRooms = allRooms.filter((room) => room.id !== id);
  updatedRooms.push(updatedRoom);
  storageService.saveRooms(updatedRooms);
}
function getRoomById(id) {
  const room = storageService.getRoom(id);
  return room;
}

export const roomServiece = {
  colors,
  createRoom,
  getAllRooms,
  saveRoom,
  getCurrentRoom,
  updateRoom,
  generateId,
  getRoomById,
};
