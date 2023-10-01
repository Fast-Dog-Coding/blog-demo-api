const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

/* GET posts listing. */
router.get('/', getAllPosts);

/* GET post categories. */
router.get('/archive-links', getArchiveLinks);

/* GET post categories. */
router.get('/categories', getPostCategories);

/* GET reset published dates. */
router.post('/reset-dates', postResetDates);

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
    const { query } = req;
    const posts = await postsController.getAllPosts(query);

    if (!Array.isArray(posts) || posts.length === 0) {
        return res.status(404).end();
    }

    return res.status(200).send(posts);
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

/**
 * Retrieves the archive links from the server.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<{label:string,date:string}[]>} - A promise that resolves to the archive links or an error response.
 */
async function getArchiveLinks(req, res) {
    const archiveLinks = await postsController.getArchiveLinks();

    if (!archiveLinks) {
        return res.status(404).end();
    }

    return res.status(200).send(archiveLinks);
}

async function getPostCategories(req, res) {
    const categories = await postsController.getPostCategories();

    if (!categories) {
        return res.status(404).end();
    }

    return res.status(200).send(categories);
}

function postResetDates(req, res) {
    res
      .status(500)
      .type('text/plain')
      .send('Endpoint Under Construction');
}

module.exports = router;
