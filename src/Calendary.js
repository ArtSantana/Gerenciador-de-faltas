import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { Calendar, Badge } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}
function onSelect(date) {
  console.log("dia: " + date);
}
function Calendary() {
  function getListData(value) {
    let listData;
    switch (value.format("dddd")) {

      case "Monday":
        listData = [
          { type: "warning", content: "MATERIA 1 DE SEGUNDA" },
          { type: "warning", content: "MATERIA 2 DE SEGUNDA" }

        ];
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
