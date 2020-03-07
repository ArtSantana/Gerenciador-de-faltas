import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { ResponsiveBar } from "@nivo/bar";

function Graphs() {
  const data = [
    {
      
      Disciplina: "Estrutura de dados",
      Faltas: 39,
      FaltasColor: "blue",
      maxFaltas: 20
    },
     {
      Disciplina: "Engenharia de software",
      Faltas: 5,
      FaltasColor: "hsl(179, 70%, 50%)",
      maxFaltas: 25
    },
         {
      Disciplina: "Matematica discreta",
      Faltas: 1,
      FaltasColor: "red",
      maxFaltas: 10
    }
  ];

  return (
    
                
    <div className="graph-demo">
    {data.map(curso => (
        
         
           
            
          <ResponsiveBar
            data={[curso]}
            keys={["Faltas"]}
            indexBy="Disciplina"
            margin={{ top: 10, right: 130, bottom: 50, left: 150 }}
            padding={0.3}
            layout="horizontal"
            colors={[curso.FaltasColor]}
            maxValue={curso.maxFaltas}
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
              legend: curso.Faltas + "/" + curso.maxFaltas,
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
          
          )

          
       )}
    </div>
   
  );
}
export default Graphs;
