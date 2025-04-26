import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";


function Calendarcard({onSelectDate}) {

  
  const handleselect = (date) => {
    
    console.log(date);
    onSelectDate(date);
    
  }
  
  return (
    <>
      <div
        className="align-items-center d-flex justify-content-center mt-2 ml-2 border border-2 rounded"
        style={{ backgroundColor: "#FF9B17" }}
      >
        <Calendar onChange={handleselect} />
      </div>
    </>
  );
}
export default Calendarcard;
