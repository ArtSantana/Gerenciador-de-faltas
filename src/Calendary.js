﻿import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { Calendar, Badge } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Calendary() {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." }
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." }
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." }
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
        className="calendar-demo"
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}
export default Calendary;
