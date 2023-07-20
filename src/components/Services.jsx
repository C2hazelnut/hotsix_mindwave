import React, { useState, useRef } from "react";
import Calendar from 'react-calendar';
import './Services.css';

const Services = (e) => {
  /*달력*/
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <header className="masthead">
      <hr className="sign-divider-light"/>
      <h2 className="text-center mt-0 text-white text-center">마음일지</h2>
      <hr className="sign-divider-light"/>
      <div class="s-grid">
          {/*<div className="left-sidebar">
              <ul className="sidebar-menu">
                <li>Calendar</li>
                <li>Diarys</li>
                <li>Results</li>
              </ul>
            </div>*/}
        <div class = "content">
          <div class="diary">
            <div>
              <input 
              name="DiaryTitle" 
              placeholder="일기제목을 작성해주세요" 
              />
            </div>
            <br></br>
            <textarea 
              name="postcontent"
              placeholder="오늘의 일기를 작성하세요..."
            />
          </div>
          <div class="d-grid">
            <button className="btn btn-primary btn-xl">
              진단하기
            </button>
          </div>
        </div>
        <br></br>
        <div class="c-grid">
          <div class="diary-calendar">
            <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            />
          </div> 
          <p>{selectedDate.toDateString()}</p>
          <div class="d-grid">
            <button className="btn btn-primary btn-xl">
              일기 작성
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Services;
