import React from 'react';
import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(
        <div className="sidebar">

            <ul>
                <li>
                    <Link to='testresult' class='nav-link text-white'>
                        덫
                    </Link>
                </li>
                <li>
                    <Link to='diarycalendar' class='nav-link text-white'>
                        달력&일기
                    </Link>
                </li>
                <li>
                    <Link to='others' class='nav-link text-white'>
                        그 외
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;