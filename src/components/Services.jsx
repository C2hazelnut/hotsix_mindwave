import React, { useState } from "react";
import Calendar from 'react-calendar';
import './Services.css';
//import Diary from './Diary';

const Services = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <header className="masthead">
      <hr className="sign-divider-light"/>
      <h2 className="text-center mt-0 text-white text-center">마음일지</h2>
      <hr className="sign-divider-light"/>  
      <div class="c-grid">
        <div class="diary-calendar">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
       </div> 
       <p>선택된 날짜: {selectedDate.toDateString()}</p>
       <button className="btn btn-primary btn-xl" id="addButton" type="add">
        일기 추가 및 진단하기
       </button>
      </div>
    </header>
  );
};

export default Services;
