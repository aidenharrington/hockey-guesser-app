const express = require('express');
const mongoose = require('mongoose');
const db_config = require('./server/db_config');
const routes = require('./server/routes/players');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 7500;

// mongoose.Promise = global.Promise;
// mongoose
//   .connect(db_config.url, {
//     useNewUrlParser: true,
//     user: process.env.MONGO_ROOT_USER,
//     pass: process.env.MONGO_ROOT_PASSWORD
//   })
//   .then(() => console.log('Database connected successfully'))
//   .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/players', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});