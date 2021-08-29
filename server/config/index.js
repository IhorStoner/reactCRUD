module.exports = Object.assign(
  {
    PORT: parseInt(process.env.PORT || '5000'),
  },
  require(`./${process.env.NODE_ENV}.config.js`)
);
