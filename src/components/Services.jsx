import React, { useState} from "react";
import Calendar from 'react-calendar';
import './Services.css';

const Services = (e) => {
  /*달력*/
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const today = new Date();
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date > today;
  };
  // 오늘 이후 날짜 disable
  // const tileContent = ({ date, view }) => {
  //   if (date > today) {
  //     return (
  //       <span style={{ textDecoration: "line-through" }}>{date.getDate()}</span>
  //     );
  //   }
  // };

  const [buttonVisible, setButtonVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (props) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setButtonVisible(false);
      setContentVisible(true);
    }, 2000);
  };

  const handleContentClick = () => {
    setButtonVisible(true);
    setContentVisible(false);
  };

  return (
    <>
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
              <div className="d-grid">
                {buttonVisible && 
                  <a href="#results">
                    <button className="btn btn-primary btn-xl" style={{ width: '100%', height: '60px' }} onClick={handleButtonClick}>{loading ? '당신의 감정은...?' : '진단하기'}</button>
                  </a>
                }
              </div>
            </div>

            {/* 달력 */}
            <div className="content">
              <div className="mt-6 diary-calendar __tile--disabled ">
                <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileDisabled={tileDisabled}
                className="react-calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section" id="results">
        <div className="container px-4 px-lg-5">
          {contentVisible && (
          <div>
            <div class="result">
              {/*감정분석 결과*/}
              당신은 <span className="fw-boldline">두려움</span>을(를) 느끼고 있습니다.<br/>
              무엇이 당신에게 두려움을(를) 느끼게 했나요?<br/>
              스스로에게 위로와 격려의 말을 건네봅시다 
            </div>
            <br/>
            <div>
              <textarea 
                  name="resultcontent"
                  placeholder="스스로에게 하고 싶은 말을 작성해봅시다."
                  className="write wb-4"
              />
              <br/>
              <a href="/Services">
                <button className="btn btn-primary btn-xl" style={{ width: '100%', height: '60px' }} onClick={handleContentClick}>일기 더 작성하기</button>
              </a>
            </div>
          </div>
          )};
        </div>
      </section>
    </>
  );
};

export default Services;
