module.exports = {
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb+srv://IhorSakhno:123456789q@users.havdj.mongodb.net/users',
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  },
};
