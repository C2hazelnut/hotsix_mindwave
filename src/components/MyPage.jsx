import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
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
                </div>
                <div class="mypagecontent">
                    <div class="testresult">
                        당신은 지금 "버림받음의 덫"에 걸려있습니다.<br/>
                        <hr class="sign-divider-light"/>
                        버림받음의 덫은<br/>
                        사랑하는 사람이 자신을 떠나고,<br/>
                        자신은 영원히 정서적으로 고립되어<br/> 
                        살게 될 것이라는 느낌에 사로잡혀 있음을<br/> 
                        의미합니다.
                    </div>
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