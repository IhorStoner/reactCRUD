const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./routes');
const { PORT, mongodb } = require('./config');

const app = express();
const server = require('http').createServer(app);

mongoose.connect(mongodb.uri, mongodb.options);
mongoose.set('debug', process.env.NODE_ENV !== 'production');

app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

(async function start() {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`);
    });
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
})();
