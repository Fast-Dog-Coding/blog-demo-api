const { USERS } = require('../data');

async function getAllUsers() {
  return USERS;
}

async function getUserById(userId) {
  return USERS[userId];
}

module.exports = {
  getAllUsers,
  getUserById
}
