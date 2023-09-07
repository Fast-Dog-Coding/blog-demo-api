const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

/* GET posts listing. */
router.get('/', getAllPosts);

/* GET a post. */
router.get('/:postId', getPostById);

/* Route Handlers */

/**
 * Retrieves all posts from the posts controller.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @return {Promise<Object>} - A promise that resolves to the retrieved posts.
 */
async function getAllPosts(req, res) {
    const posts = await postsController.getAllPosts();

    if (!posts) {
        return res.status(404).end();
    }

    return res.status(200).send(Object.values(posts));
}

/**
 * Fetches a post by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @returns {Promise} - A promise that resolves with the fetched post or rejects with an error.
 */
async function getPostById(req, res) {
    const { postId } = req.params;
    const post = await postsController.getPostById(postId);

    if (!post) {
        return res.status(404).end();
    }

    return res.status(200).send(post);
}

module.exports = router;
