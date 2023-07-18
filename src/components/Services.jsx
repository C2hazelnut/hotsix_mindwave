import React, { useState } from "react";
//import Diary from './Diary';


const Services = () => {
    return (
      <header className="masthead">
        <div>
          <hr className="sign-divider-light"/>
          <h2 className="text-center mt-0 text-white text-center">마음일지</h2>
          <hr className="sign-divider-light"/>
            <div class="diary">
              <textarea 
                placeholder="오늘의 일기를 작성하세요..."
              />
            </div>
            <div class="d-grid">
              <button className="btn btn-primary btn-xl" id="addButton" type="add">
                add
              </button>
          </div>
        </div>
      </header>
  );
};

export default Services;
