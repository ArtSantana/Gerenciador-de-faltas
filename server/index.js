require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server up at port: ${process.env.PORT}`));