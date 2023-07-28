import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import Sidebar from './Sidebar';
import './Services.css';

function MyPage(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const today = new Date();
    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date > today;
    };
    return(
        <header class="masthead">
            <hr class="sign-divider-light mt-7"/>
            <h2 class="text-center mt-0 text-white text-center">마이페이지</h2>
            <hr class="sign-divider-light"/>
            <div class="container">
                <div className="col-auto">
                    <Sidebar />
                </div>
                <div class="mypagecontent">
                    <div className="mt-6 diary-calendar">
                        <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileDisabled={tileDisabled}
                        className="react-calendar"
                        />
                    </div>
                    <div className="date">{selectedDate.toDateString()}</div>
                </div>
            </div>
        </header>
    );
};

export default MyPage;