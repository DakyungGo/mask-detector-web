import React, { useState } from "react";
import ReactWeeklyDayPicker from "react-weekly-day-picker";
import "../styles/WeekRecord.css";

function WeekRecord() {
  const today = new Date();

  return (
    <div>
      <div>일주일 간의 기록</div>
      <ReactWeeklyDayPicker
        dayCount={7}
        startDay={new Date().setDate(today.getDate() - 6)}
      />
    </div>
  );
}

export default WeekRecord;
