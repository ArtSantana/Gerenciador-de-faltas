require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());
// Importing routes
const home = require('./routes/home');
// Application listening port
app.listen(3000, () => console.log(`Server up at port: ${process.env.PORT}`));

app.use('/', home);