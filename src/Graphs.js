import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";
import "./App.css";
import { ResponsiveBar } from "@nivo/bar";
import { Select } from "antd";
import { Button } from "antd";

const { Option } = Select;

function Graphs() {
  const SelectCurso = () => {
    return (
      <div className="selCurso">
        <label>Selecionar curso</label>

        <Select
          defaultValue={cursos[0].curso}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="0">{cursos[0].curso}</Option>
          <Option value="1">{cursos[1].curso}</Option>
        </Select>
      </div>
    );
  };

  function handleChange(value) {
    setSelectIndex(cursos[value]);
  }

  const lineGraphSettings = {
    theme: {
      fontSize: "15px",
      textColor: "black",
      fontWeight: 10000
    }
  };

  const [cursos, setCursos] = useContext(CursosContext);
  const [selectIndex, setSelectIndex] = useState(cursos[0]);

  return (
    //{cursos.map(curso => (
    <div className="cursosContainer">
      <div className="inputs">
        <Button className="addCurso" type="primary">
          Adicionar curso
        </Button>
        <SelectCurso />
      </div>
      <div className="graph-demo">
        {selectIndex.disciplinas.map(dp => (
          <ResponsiveBar
            data={[dp]}
            keys={["faltas"]}
            indexBy="nomeDP"
            margin={{ top: 10, right: 0, bottom: 50, left: 300 }}
            padding={0.3}
            layout="horizontal"
            colors={dp.faltasColor}
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
            theme={lineGraphSettings.theme}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend:
                cursos[0].disciplinas[0].faltas +
                "/" +
                cursos[0].disciplinas[0].maxFaltas,
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
        ))}
      </div>
    </div>
  );
}
export default Graphs;
