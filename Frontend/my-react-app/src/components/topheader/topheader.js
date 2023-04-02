import React from 'react';
import "./topheader.css"

function Header() {
    return(
        <div id = "header">
            <div className= "header-content">
                <button className= "header-logo-button">
                    Can we Habit?
                </button>

                <div className = "pages-category">
                    <button className= "header-button">
                        HOME
                    </button>
                    <button className= "header-button">
                        GOALS
                    </button>
                    <button className= "header-button">
                        MY PAGE
                    </button>
                    <button className= "header-start-button">
                        Start!
                    </button>
                </div>
            </div>
            <div className= "vector"></div>
        </div>
    )
}

export default Header;