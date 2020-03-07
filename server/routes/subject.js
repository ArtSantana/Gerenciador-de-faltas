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
conn.connect((err) => {
  if(err) console.log(err);
});

router.post('/create', (req, res) => {
  const data = req.body;
  const query = `INSERT INTO Disciplinas(diaAula, horaAula) 
              VALUES (${data.dayWeek}, ${data.creditsHour});`
  conn.query(query, (err) => {
    if(err) res.send('Error');
  })  
  res.send('OK');
})

router.delete('/', (req, res) => {
  const data = req.body;
  const query = `DELETE FROM Disciplinas WHERE ID=${data.id}`

  conn.query(query, (err) => {
    if(err) res.send('Error');
  })
  res.send('OK')
})

router.post('/search', (req, res) => {
  const data = req.body;
  const query = `SELECT * from Disciplinas WHERE ID_Curso=${data.id_curso}`
  
  conn.query(query, (err, result) => {
    if(err) res.send('Error');
    res.json(result)
  })
})

module.exports = router;