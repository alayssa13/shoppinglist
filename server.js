const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const marvels = require('./routes/api/marvels');

const app = express();

// Bodyparser Middleware 
app.use(bodyParser.json());

// DB config 
const db = require ('./config/keys').mongoURI; 

// Connect to Mongo 
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err)); 

// Use Routes
app.use('/api/marvels', marvels);

const port =  process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));