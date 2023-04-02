
import "./mypage.css"
import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import gym1 from "../goals/images/gym1.jpg"


function MyPage() {
    const [selectedItem, setSelectedItem] = useState(null);
    return(
        <div className = "MainContainer">
                
            <div className = "SubContainer">
                <div className = "ProfileCon">
                    <div className = "ProfilePic"></div>
                    <div className = "NameCon">
                        <div className = "Name">JANE DOE</div>
                        <div className = "Points">Total&#128176;: 50</div>
                    </div>
                </div>

                <div className = "Bars">
                    <div className = "check">Succeeded</div>
                    <div className = "check">Failed</div>
                </div>
                <div className = "Progress">
                    <ProgressBar width = "50px" labelAlignment = "center" bgColor = "#89ACD2" completed="60" width = "2100%" />
                    </div>
                <div className = "Columns">
                    <button className = "choose">In Progress</button>
                    <button className = "choose">Succeeded</button>
                    <button className = "choose">Failed</button>

                </div>

                <div className = "choices">
                    <button className = "select"><img src = {gym1} alt="my image" style={{ z: -1, height: '90px', margin: '0px 0px 100px' }}/></button>
                    <button className = "select"></button>
                    <button className = "select"></button>
                    <button className = "select"></button>
                    <button className = "select"></button>

                </div>

                <div className = "Liked"> Challenges you liked</div>
                <div className = "choices">
                    <button className = "select"></button>
                    <button className = "select"></button>
                    <button className = "select"></button>
                    <button className = "select"></button>
                    <button className = "select"></button>

                </div>
                
            </div>
        
        
        
        </div>
    )
}

export default MyPage;