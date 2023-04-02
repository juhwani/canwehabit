import React from 'react';
import "./topheader.css"
import {Link} from "react-router-dom"

function Header() {
    return(
        <div id = "header">
            <div className= "header-content">
                <button className= "header-logo-button">
                    Can we Habit?
                </button>

                <div className = "pages-category">
                    <button className= "header-button" onclick="location.href='/'">
                        <Link to = "/">
                        HOME
                        </Link>
                    </button>
                    <button className= "header-button" onclick="location.href='/goals'">
                        <Link to = "/goals">
                        GOALS
                        </Link>
                    </button>
                    <button className= "header-button">
                        <Link to = "/mypage">
                        MY PAGE
                        </Link>
                    </button>
                    <button className= "header-start-button">
                        <Link to = "/challenges2">
                        Start!
                        </Link>
                    </button>
                </div>
            </div>
            <div className= "vector"></div>
        </div>
    )
}

export default Header;