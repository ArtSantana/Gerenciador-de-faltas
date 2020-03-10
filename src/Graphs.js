import React,{useState,useContext} from "react";
import ReactDOM from "react-dom";
import {CursosContext}  from "./CursosContext";
import "./App.css";
import { ResponsiveBar } from "@nivo/bar";

function Graphs() {


  const [cursos,setCursos] = useContext(CursosContext);



  return (

    //{cursos.map(curso => (
    <div className="graph-demo">






          <ResponsiveBar
            data={[cursos[0].disciplinas[0]]}
            keys={["faltas"]}
            indexBy="nomeDP"
            margin={{ top: 10, right: 130, bottom: 50, left: 150 }}
            padding={0.3}
            layout="horizontal"
            colors={[cursos[0].disciplinas[0].faltasColor]}
            maxValue={cursos[0].disciplinas[0].maxFaltas}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 5,
                spacing: 10
              }
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: cursos[0].disciplinas[0].faltas + "/" + cursos[0].disciplinas[0].maxFaltas,
              legendPosition: "end",
              legendOffset: 40
            }}
            axisLeft={{
              tickSize: 6,
              tickPadding: 1,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -40
            }}
            labelSkipWidth={15}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />





    </div>

  );
}
export default Graphs;
