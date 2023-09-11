const { CATEGORIES, POSTS } = require('../data');

async function getAllPosts() {
  return POSTS;
}

async function getPostCategories() {
  return Object.values(CATEGORIES);
}

async function getPostById(postId) {
  return POSTS[postId];
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostCategories
}
