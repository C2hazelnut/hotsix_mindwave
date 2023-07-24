import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import './Services.css';

function MyPage(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <header class="masthead">
            <hr class="sign-divider-light"/>
            <h2 class="text-center mt-0 text-white text-center">마이페이지</h2>
            <hr class="sign-divider-light"/>
            <div class="c-grid">
                <div class="diary-calendar">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div> 
                <p>{/*selectedDate.toDateString()*/}</p>
                <div class="d-grid">
                    <button class="btn btn-primary btn-xl">
                        일기 작성
                    </button>
                </div>
            </div>
        </header>
    );
};

export default MyPage;