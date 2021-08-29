const { getUsers, checkIsExistUserEmail, createNewUser, getUserById, changeUserById, deleteUserById } = require('./users.service');

exports.getUsersCtrl = async (req, res) => {
  const { currentPage, perPage } = req.query;
  const data = await getUsers(perPage, currentPage);

  res.status(200).json(data);
};

exports.isExistEmailCtrl = async (req, res) => {
  const result = await checkIsExistUserEmail(req.query.email);

  res.status(200).send({ is_exist: result });
};

exports.newUserCtrl = async (req, res) => {
  const user = req.body;
  const userId = await createNewUser(user);

  res.status(201).send({ _id: userId });
};

exports.getUserByIdCtrl = async (req, res) => {
  const { userId } = req.params;
  const selectedUser = await getUserById(userId);

  if (!selectedUser) {
    res.status(400).send({ error: 'User not found' });
    return;
  }

  res.status(200).send(selectedUser);
};

exports.changeUserCtrl = async (req, res) => {
  const newUserData = req.body;
  const { userId } = req.params;
  const updateUser = await changeUserById(userId, newUserData);

  res.status(200).send(updateUser);
};

exports.deleteUserCtrl = async (req, res) => {
  const { userId } = req.params;
  const deletedUser = await deleteUserById(userId);

  res.status(200).send(deletedUser);
};
