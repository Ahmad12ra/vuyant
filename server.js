const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from your React app
    methods: ["GET", "POST"], // Allowed HTTP methods
  },
});

async function updateUserState(userId, newState) {
  try {
    const fet = await fetch(
      "http://localhost/verant_apis/updateUserState.php",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId: userId, newState: newState }),
      }
    );
    const res = await fet.json();
    console.log(res);
    if (res.status === 200) {
      return true;
    } else return false;
  } catch (e) {
    console.error("error fetching updateUserState.php" + e);
    return false;
  }
}

let useresDetails = new Map();
let rooms = [];

io.on("connection", (socket) => {
  socket.on("userDetails", (userId) => {
    useresDetails.set(socket.id, userId);
    console.log(useresDetails);
  });

  console.log("connected a user");

  socket.on("updateUserStatus", (userId, newState) => {
    updateUserState(userId, newState);
    socket.emit(
      "updateCheck",
      `The user ${userId} status updated to ${newState} in the db table`
    );
  });

  socket.on("disconnect", () => {
    updateUserState(useresDetails.get(socket.id), 0);
    useresDetails.delete(socket.id);
    console.log(useresDetails);
  });

  socket.on("addUserToRoom", userId => {
    rooms.push(userId);
    console.log(rooms);
  })

});

const port = 4000;
server.listen(port, () => {
  console.log("listening on *: " + port);
});
