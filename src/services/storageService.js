const ROOM_KEY = "rooms";
const IN_ROOM = "currentRoom";

export const storageService = {
  getRooms() {
    const rooms = localStorage.getItem(ROOM_KEY);
    return rooms ? JSON.parse(rooms) : [];
  },
  getRoom(id) {
    const rooms = this.getRooms();
    const room = rooms.filter((room) => room.id === id);
    return room.pop();
  },
  saveRooms(rooms) {
    localStorage.setItem(ROOM_KEY, JSON.stringify(rooms));
  },
  deleteRoom(id) {
    const rooms = this.getRooms();
    const updatedRooms = rooms.filter((room) => room.id !== id);
    this.saveUsers(updatedRooms);
    return updatedRooms;
  },
  getCurrentRoom() {
    const CurrentRoom = sessionStorage.getItem(IN_ROOM);
    return CurrentRoom ? JSON.parse(CurrentRoom) : null;
  },
  saveCurrentRoom(room) {
    sessionStorage.setItem(IN_ROOM, JSON.stringify(room));
  },
  // clearAll() {
  //   sessionStorage.removeItem(LOGGED_IN_USER);
  // },
};
