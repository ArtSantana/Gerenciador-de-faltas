require('dotenv').config();
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
})

conn.connect((err) => {if(err) console.log(err)});

module.exports = router;