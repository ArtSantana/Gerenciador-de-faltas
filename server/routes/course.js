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

router.post('/create', (req, res) => {
  const data = req.body;
  const query = `INSERT INTO Cursos(nome, ID_Estudante) VALUES('${data.name}', 1);`
  conn.query(query, (err) => {
    if(err) res.sendStatus(400);
    else res.sendStatus(201);
  })
})

router.get('/search', (req, res) => {
  const data = req.body;
  const query = `SELECT * FROM Cursos WHERE ID_Estudante=${data.id_student}`

  conn.query(query, (err, result) => {
    if(err) res.sendStatus(404);
    res.sendStatus(200).json(result);
  })
})

router.delete('/delete', (req, res) => {
  const data = req.body;
  const query = `DELETE FROM Cursos WHERE ID=${data.id};`

  conn.query(query, (err) => {
    if(err) res.sendStatus(404);
  })
  res.sendStatus(200);
})

router.patch('/changeName', (req, res) => {
  const data = req.body;
  const query = `UPDATE TABLE Cursos SET nome=${data.name} WHERE id=${data.id};`
  if(data.name == null || data.id == null) res.sendStatus(204);
  conn.query(query, (err) => {
    if(err) res.sendStatus(404);
  })
  res.sendStatus(200);
})

module.exports = router;