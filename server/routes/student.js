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

router.delete('/delete', (req, res) => {
  const data = req.body;
  const query = `DELETE FROM Estudante WHERE ID=${data.id};`

  conn.query(query, (err) => {
    if(err) res.status(400).send('Se fudê todo dia isso');
    else res.sendStatus(204);
  })
})

module.exports = router;