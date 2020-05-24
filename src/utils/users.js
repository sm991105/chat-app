const users = [];

// addUser
const addUser = ({ id, username, room }) => {
  // Clean the data(trim)
  username = username.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "username and room are required.",
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  // push user into the array
  users.push(user);
  return { user };
};

// removeUser
const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0]; // remove one
  }
};

// getUser
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// getUsersInRoom
const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

addUser({
  id: 22,
  username: "Cho",
  room: "South Philly",
});

addUser({
  id: 33,
  username: "judy",
  room: "South Philly",
});

addUser({
  id: 44,
  username: "hyunbin",
  room: "north korea",
});

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
