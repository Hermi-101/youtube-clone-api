require('dotenv').config();
const express = require('express');

//Express Init
const app = express();


//Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in the port ${PORT}`))