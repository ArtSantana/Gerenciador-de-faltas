import React, { useState, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";
import "./App.css";
import Chart from "react-apexcharts";
import { Select } from "antd";
import { Button } from "antd";
import { Card } from "antd";

function CursoInfo(props) {
  const [cursos, setCursos] = useContext(CursosContext);

  const { Meta } = Card;

  return (
    <div className="cursosCards">
    <h1>{props.cursoIndex.name}</h1>
      {props.cursoIndex.disciplinas.map(dp => (
        <Card className="cards">
          <div className = "cardMap">
          <h3>{dp.nomeDP}</h3>
          <p>{dp.professor}</p>
          <p>Faltassss: {dp.faltas}/ {dp.maxFaltas}</p>
          <hr></hr>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default CursoInfo;
