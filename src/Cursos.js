import React, { useState, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { CursosContext } from "./CursosContext";
import "./App.css";
import Chart from "react-apexcharts";
import { Select } from "antd";
import { Button } from "antd";
import CursoInfo from "./CursoInfo";
import AddCursoForm from "./FormsInputs";
import { DisciplinasModal } from "./FormsInputs";

const { Option } = Select;

function Cursos() {





  const [cursos, setCursos] = useContext(CursosContext);

  {/*Controls Select course input used to control conditional rendering of info*/}
  const [selectIndex, setSelectIndex] = useState(0);





  function handleChange(value) {
    setSelectIndex(cursos[value]);
  }

  const SelectCurso = () => {
    return (
      <div className="selCurso">
        <Select
          defaultValue={selectIndex.nome}
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {cursos.map((cr, index) => (
            <Option value={index}>{cr.nome}</Option>
          ))}
        </Select>
      </div>
    );
  };



{/*Changes what is rendered depending on course and subject information avaliable*/}
  const ConditionalRender = () => {

      return(
        selectIndex === 0 ?
        <div className="SelectAddCurso">
        <SelectCurso />
        <AddCursoForm />
          </div>
        :
        selectIndex.hasOwnProperty('disciplinas') == false ?
        <div>
          <div className="SelectAddCurso">
            <SelectCurso />
            <AddCursoForm />
          </div>
          <div className="cursosContainer">
            <div className="cardsContainer">
              <h2>Curso: {selectIndex.nome}</h2>
              <h2>Nenhuma disciplina cadastrada!</h2>
              <DisciplinasModal />
            </div>
            </div>
            </div>
            :
            <div>
              <div className="SelectAddCurso">
                <SelectCurso />
                <AddCursoForm />
              </div>
              <div className="cursosContainer">
                <div className="cardsContainer">
                  <CursoInfo cursoIndex={selectIndex} />
                  <DisciplinasModal />
                </div>

                <div className="app">
                  <h2 className="faltas">Faltas por disciplina</h2>

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
            </div>

      );
  }

  return (
    <ConditionalRender/>

  );
}
export default Cursos;
