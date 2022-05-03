const { User } = require('../models/user.model');
const { catchAsync } = require('../utils/catchAsync');

// Listar Usuarios
const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    users,
  });
});

//crear Usuario
const createUser = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name);
  const newUser = await User.create({ name, email, password, role });
  res.status(201).json({ newUser });
});

//traer usuario por id
const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params; // { id, postId, comentId }
  //busca algo segun el parametro pasado
  const user = await User.findOne({ where: { id } });

  res.status(200).json({
    user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // await User.update({name},{where:{id}})

  const user = await User.findOne({ where: { id } });

  user.update({ name });

  res.status(200).json({ status: 'succes' });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  // await User.update({name},{where:{id}})

  const user = await User.findOne({ where: { id } });

  await user.update({ status: 'deleted' });
});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
