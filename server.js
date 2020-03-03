require('dotenv').config()
const express = require('express');
const app = express();

app.listen(3000, () => console.log(`Server up at port: ${process.env.PORT}`));

app.get('/', (request, response) => response.send('Empty home'));
