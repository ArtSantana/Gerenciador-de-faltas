require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
// Importing routes
const subject = require('./routes/subject');
const course = require('./routes/course');
const student = require('./routes/student');

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server up at port: ${process.env.PORT}`));
// Adding routes
app.use('/subject', subject);
app.use('/course', course);
app.use('/student', student);