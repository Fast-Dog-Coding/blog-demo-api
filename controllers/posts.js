const { POSTS } = require('../data');

async function getAllPosts() {
  return POSTS;
}

async function getPostById(postId) {
  return POSTS[postId];
}

module.exports = {
  getAllPosts,
  getPostById
}
