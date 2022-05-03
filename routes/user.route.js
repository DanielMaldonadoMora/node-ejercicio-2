const express = require('express');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

//Middlewares
const { userExists } = require('../middlewares/user.middleware');

const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createUserValidations, checkValidations, createUser);
//router.post('/', createUser);

router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = { usersRouter: router };
