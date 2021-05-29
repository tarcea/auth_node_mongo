const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
// import routes
const authRoute = require('./routes/auth');

dotenv.config();

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('connected to DB')
);

app.use(express.json());

// route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('server up and running')
});

