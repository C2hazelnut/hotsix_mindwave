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
      {/* 마음일지 */}
      <hr className="sign-divider-light"/>
      <h2 className="text-center mt-0 text-white text-center">마음일지</h2>
      <hr className="sign-divider-light"/>

      <div>
        <div className = "content">
          {/* 일기 작성란 */}
          <div className="diary">
            <div className="date">{selectedDate.toDateString()}</div>

            <input 
            name="DiaryTitle" 
            placeholder="일기제목을 작성해주세요" 
            className="input mb-2"
            />
            <textarea 
              name="postcontent"
              placeholder="오늘의 일기를 작성하세요..."
              className="write mb-3"
            />
            <div className="d-grid"><button className="btn btn-primary btn-xl">진단하기</button></div>
          </div>

          {/* 달력 */}

          <div className="content">
            <div className="mt-6 diary-calendar">
              <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Services;
