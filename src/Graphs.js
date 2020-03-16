import React, { useState, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";
import "./App.css";
import Chart from "react-apexcharts";
import { Select } from "antd";
import { Button } from "antd";
import Cursos from "./Cursos";
import AddCursoForm from "./AddCursoForm";

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
          <Option value="2">{cursos[2].curso}</Option>
        </Select>
      </div>
    );
  };

  function handleChange(value) {
    setSelectIndex(cursos[value]);
  }

  const [cursos, setCursos] = useContext(CursosContext);
  const [selectIndex, setSelectIndex] = useState(cursos[0]);

  return (
    <div className="cursosContainer">
    <div className = "cardsContainer">
    <AddCursoForm/>
      <Cursos />
      </div>
      <div className="app">
            <h2 className="faltas">Faltas por disciplina</h2>
            <SelectCurso />
            {selectIndex.disciplinas.map(dp => (
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: 0,
                    foreColor: "white"
                  },
                  legend: {
                    labels: {
                      colors: "white",
                      useSeriesColors: false
                    }
                  },
                  plotOptions: {
                    bar: {
                      barHeight: "100%",
                      distributed: true,
                      horizontal: true,
                      dataLabels: {
                        position: "top"
                      },
                      colors: {
                        ranges: [
                          {
                            from: 0,
                            to: 0,
                            color: "white"
                          }
                        ]
                      }
                    }
                  },
                  colors: ["#f5b342"],
                  dataLabels: {
                    enabled: true,
                    textAnchor: "start",

                    formatter: function(val, opt) {
                      return "";
                    },
                    offsetX: 0,
                    dropShadow: {
                      enabled: true
                    }
                  },
                  stroke: {
                    width: 1,
                    colors: ["white"]
                  },
                  xaxis: {
                    categories: [dp.nomeDP],

                    labels: {
                      show: true,
                      rotate: -45,
                      rotateAlways: false,
                      hideOverlappingLabels: true,
                      showDuplicates: false,
                      trim: false,
                      minHeight: undefined,
                      maxHeight: 120,
                      colors: "white"
                    }
                  },
                  yaxis: {
                    crosshairs: {
                      show: false,
                      position: "back",
                      stroke: {
                        color: "#white",
                        width: 0,
                        dashArray: 0
                      }
                    },
                    max: dp.maxFaltas,
                    labels: {
                      show: false,
                      style: {
                        colors: [],
                        fontSize: "15px",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                        cssClass: "apexcharts-xaxis-label"
                      }
                    }
                  },
                  title: {
                    text: "",
                    align: "center",
                    floating: true
                  },
                  tooltip: {
                    theme: "dark",
                    x: {
                      show: false
                    },
                    y: {
                      formatter: function() {
                        return [dp.faltas] + "/" + [dp.maxFaltas];
                      },
                      title: {
                        show: false,
                        formatter: function() {
                          return "";
                        }
                      }
                    }
                  }
                }}
                series={[
                  {
                    data: [dp.faltas]
                  }
                ]}
                type="bar"
                height="130"
              />
            ))}
          </div>
        </div>
  );
}
export default Graphs;
