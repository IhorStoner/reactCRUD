const UserModel = require('../../models/UserModel');

exports.getUsers = async (perPage, page) => {
  const options = {
    page: page,
    limit: perPage,
    collation: {
      locale: 'en',
    },
  };

  const data = UserModel.paginate({}, options, (err, result) => {
    return { users: result.docs, pages: result.totalPages };
  });
  return data;
};

exports.checkIsExistUserEmail = async (email) => {
  const result = await UserModel.exists({ email: email });

  return result;
};

exports.createNewUser = async (user) => {
  const newUser = new UserModel(user);
  const { _id } = await newUser.save();

  return _id;
};

exports.getUserById = async (id) => {
  const user = await UserModel.findById(id);

  return user;
};

exports.changeUserById = async (id, user) => {
  const updateUser = await UserModel.findByIdAndUpdate(id, user);

  return updateUser;
};

exports.deleteUserById = async (id) => {
  const deletedUser = await UserModel.findByIdAndDelete(id);

  return deletedUser;
};
