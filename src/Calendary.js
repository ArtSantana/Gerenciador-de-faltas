import React,{useState,useContext} from "react";
import {CursosContext}  from "./CursosContext";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { Calendar, Badge } from "antd";






function Calendary() {
  const [cursos,setCursos] = useContext(CursosContext);
  const [aulas,setAulas] = useState([
    {
      disciplina:{

      }


    }]
  );




  function getListData(value) {
    let listData = [];
    switch (value.format("dddd")) {

      case "Monday":
          {cursos[0].disciplinas.map(dp => (
              dp.diasAulas[0]>0 ?
                listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[0]})
                :
                listData = listData


          ))}
        break;
        case "Tuesday":
            {cursos[0].disciplinas.map(dp => (
                dp.diasAulas[1]>0 ?
                  listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[1]})
                  :
                  listData = listData


            ))}
          break;
          case "Wednesday":
              {cursos[0].disciplinas.map(dp => (
                  dp.diasAulas[2]>0 ?
                    listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[2]})
                    :
                    listData = listData


              ))}
            break;
            case "Thursday":
                {cursos[0].disciplinas.map(dp => (
                    dp.diasAulas[3]>0 ?
                      listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[3]})
                      :
                      listData = listData


                ))}
              break;
            case "Friday":
                  {cursos[0].disciplinas.map(dp => (
                      dp.diasAulas[4]>0 ?
                        listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[4]})
                        :
                        listData = listData


                  ))}
                break;
            case "Saturday":
                      {cursos[0].disciplinas.map(dp => (
                          dp.diasAulas[5]>0 ?
                            listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[5]})
                            :
                            listData = listData


                      ))}
                    break;
          case "Sunday":
                              {cursos[0].disciplinas.map(dp => (
                                  dp.diasAulas[6]>0 ?
                                    listData.push({type:"warning",content:dp.nomeDP + " - Aulas: " + dp.diasAulas[6]})
                                    :
                                    listData = listData


                              ))}
                            break;
      default:
    }

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function monthCellRender(value) {
    return <div className="notes-month" />;
  }

  return (

    <div className="site-calendar-demo-card">
      <Calendar
        onSelect={e => {
          console.log(e.format("dddd"));
        }}
        className="calendar-demo"
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}
export default Calendary;
