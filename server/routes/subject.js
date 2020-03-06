require('dotenv').config();
const express = require('express');
const router = express.Router();
const model = require('../db/models/subjectModel');
const mysql = require('mysql');
const conn = mysql.createConnection({ 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

router.post('/', (req, res) => {
  const data = req.body;
  conn.connect((err) => {
    if(err) console.log(err);
  })
  let query = `INSERT INTO Disciplinas(diaAula, horaAula, ID_Curso) 
              VALUES (${data.dayWeek}, ${data.creditsHour}, ${data.idCurso})`
  conn.query(query, (err) => {
    if(err) console.log(err);
  })
})

module.export = router;