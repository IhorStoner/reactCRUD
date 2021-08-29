const { Router } = require('express');
const usersRouter = Router();
const { getUsersCtrl, isExistEmailCtrl, newUserCtrl, getUserByIdCtrl, changeUserCtrl, deleteUserCtrl } = require('./users.controller');
const { userFieldValidation } = require('./users.validation');

//get all
usersRouter.get('/', getUsersCtrl);

//check email
usersRouter.get('/is_exist', isExistEmailCtrl);

// add new User
usersRouter.post('/', userFieldValidation, newUserCtrl);

// getById
usersRouter.get('/:userId', getUserByIdCtrl);

//changeUserById
usersRouter.put('/:userId', userFieldValidation, changeUserCtrl);

//deleteUserById
usersRouter.delete('/:userId', deleteUserCtrl);

module.exports = usersRouter;
