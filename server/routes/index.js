const { Router } = require('express');
const users = require('./users');
const apiRouter = Router();

apiRouter.use('/users', users);

module.exports = apiRouter;
