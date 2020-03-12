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
      fontSize: "18px",
      textColor: "black",


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
            className="Bar"
            data={[dp]}
            keys={["faltas"]}
            indexBy="nomeDP"
            margin={{ top: 10, right: 0, bottom: 50, left: 220 }}
            padding={0.3}
            layout="horizontal"
            colors={dp.faltasColor}
            maxValue={dp.maxFaltas}

            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            theme={lineGraphSettings.theme}
            axisTop={null}
            axisRight={{
              legend:
                dp.faltas +
                "/" +
                dp.maxFaltas,
              legendPosition: "end",
              legendOffset: -20,
              layout:"horizontal"
            }}
            axisBottom={{
              tickSize: 0,
              tickPadding: 1,
              tickRotation: -1,
              fontSize: "10px"

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
