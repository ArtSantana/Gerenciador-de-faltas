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
  conn.query(`SELECT * FROM Cursos WHERE nome='${data.name_curso}'`, (err, result) => {
    if(err) res.status(400).send('Bad arguments');
    const query = `INSERT INTO Disciplinas(professor, nome, limite_faltas, ID_Curso) VALUES ('${data.professor}', '${data.name}', '${data.limite_faltas}', '${result[0].ID}');`
    conn.query(query, (err) => {
      if(err) res.status(400).send('Bad arguments');
      else res.sendStatus(201);
    })
  })
})

router.delete('/delete', (req, res) => {
  const data = req.body;
  const query = `DELETE FROM Disciplinas WHERE ID=${data.id};`

  conn.query(query, (err) => {
    if(err) res.status(404).send('Not Found');
  })
  res.sendStatus(200);
})

router.post('/search', (req, res) => {
  const data = req.body;
  const query = `SELECT * from Disciplinas WHERE ID_Curso=${data.id_course};`

  conn.query(query, (err, result) => {
    if(err) res.status(404).send('Not Found\nBad arguments');
    else res.status(200).json(result)
  })
})

module.exports = router;
