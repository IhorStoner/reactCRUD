exports.userFieldValidation = (req, res, next) => {
  const user = req.body;

  if (user.name && user.surname && user.dateOfBirthday && user.phone && user.email) {
    return next();
  }
  res.status(400).send({
    error: 'Missing required arguments',
  });
};
