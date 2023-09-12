const express = require('express');
const conn = require('./connection/conn');
const dotenv = require('dotenv'); 
dvs
// app & ports
const app = express();
const port = 4000;
sdb

// middlewares
dotenv.config({ path: './config/.env' });

// connection to database
conn();

// apis
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/say', (req, res) => {
  res.send('Hello hi!');
});

app.get('/bui', (req, res) => {
  res.send('Hello hi!');
});

// listen to port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
