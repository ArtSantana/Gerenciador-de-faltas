import React, { useState, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";
import "./App.css";
import Chart from "react-apexcharts";
import { Select } from "antd";
import { Button } from "antd";
import { Card } from 'antd';


function Cursos(){

  const [cursos, setCursos] = useContext(CursosContext);





  const { Meta } = Card;






  return(
    <div className="cursosCards">
    {cursos.map(cr => (
    <Card className="cards" title={cr.curso} extra={<a href="#">Editar</a>} style={{ width: 300 }}>
          <p></p>
        </Card>
        ))}

    </div>
  );
}
export default Cursos;
