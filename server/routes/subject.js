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

router.post('/', (req, res) => {
  const data = req.body;
  conn.connect((err) => {
    if(err) console.log(err);
  })
  let query = `INSERT INTO Disciplinas(diaAula, horaAula) 
              VALUES (${data.dayWeek}, ${data.creditsHour});`
  conn.query(query, (err) => {
    if(err) console.log(err);
  })
  res.send('Toma no cu rapaz');
})

module.exports = router;