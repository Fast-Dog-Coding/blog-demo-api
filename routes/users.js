const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', getAllUsers);

/* GET a user. */
router.get('/:userId', getUserById);

/* Route Handlers */

/**
 * Returns all users.
 *
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @return {Promise<Object[]>} A promise that resolves to an array of user objects.
 */
async function getAllUsers(req, res) {
    const users = await usersController.getAllUsers();

    if (!users) {
        return res.status(404).end();
    }

    return res.status(200).send(Object.values(users));
}

/**
 * Retrieves a user by their ID.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 *
 * @return {Promise<*>} A promise that resolves with the user object or rejects with an error.
 */
async function getUserById(req, res) {
    const { userId } = req.params;
    const user = await usersController.getUserById(userId);

    if (!user) {
        return res.status(404).end();
    }

    return res.status(200).send(user);
}


module.exports = router;
