const express = require('express');
const conn = require('./connection/conn');
const dotenv = require('dotenv'); 
const cloudinary = require("cloudinary").v2;
const app = express();
const port = 4000;

//--------------- Middlewares--------------- //
// Environment Variables
dotenv.config({ path: './config/.env' });
// Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET 
});

// connection to database
conn();
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    // The `result` object will contain information about the uploaded image
  }
});

// apis
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen to port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
