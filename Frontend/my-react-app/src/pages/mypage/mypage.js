
import "./mypage.css"
import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import gym1 from "../goals/images/gym1.jpg";
import salad from './salad.jpeg';
import meditation from './meditation.jpeg';
import party from './party.jpeg';
import running from './running.jpeg';
import study from './study.jpg';
import tea from './tea.jpeg';
import traveling from './traveling.jpeg';
import basketball from './basketball.jpeg';
import flowers from './flowers.jpeg';
import math from './math.jpeg';
import boardgames from './boardgame.jpeg';
import hannah from './hannah.jpeg';
import Header from '../../components/header/header';

function MyPage() {
    const [selectedItem, setSelectedItem] = useState("In Progress");
    const handleItemClick = (item) => {
        setSelectedItem(item);}

    return(
        <div id="mypage">
            <Header/>  
        <div className = "MainContainer">  
            <div className = "SubContainer">
                <div className = "ProfileCon">
                    <img className = "Hannah" src = {hannah}/>
                    <div className = "NameCon">
                        <div className = "Name">JANE DOE</div>
                        <div className = "Points">Total&#128176;: 700</div>
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
                    <button className = "choose" className={selectedItem === "In Progress" ? "choose2" : "choose"}
              onClick={() => handleItemClick("In Progress")}>In Progress</button>
                    <button className = "choose" className={selectedItem === "Succeeded" ? "choose2" : "choose"}
              onClick={() => handleItemClick("Succeeded")}>Succeeded</button>
                    <button className = "choose" className={selectedItem === "Failed" ? "choose2" : "choose"}
              onClick={() => handleItemClick("Failed")}>Failed</button>

                </div>
                <div className = "choices">
                    {selectedItem === "Succeeded" ? <button className = "select"><img className = "imghelp" src = {gym1} alt="my image" style={{ height: '50%',width: '100%', }}/><div className = "bubble">Workout with me!</div></button> : null}
                    {selectedItem === "Succeeded" ? <button className = "select"><img className = "imghelp" src = {salad} alt = "my image" style={{ height: '50%',width: '100%'}}/>Vegetarian for a week</button> : null }
                    {selectedItem === "Succeeded" ? <button className = "select"><img className = "imghelp" src = {meditation} alt = "my image" style={{ height: '50%',width: '100%'}}/>Meditate once a day</button> : null }
                    {selectedItem === "In Progress" ? <button className = "select"><img className = "imghelp" src = {party} alt = "my image" style={{ height: '50%',width: '100%'}}/>Go out every friday with me</button> : null }
                    {selectedItem === "In Progress" ? <button className = "select"><img className = "imghelp" src = {running} alt = "my image" style={{ height: '50%',width: '100%'}}/>20min of jogging with groups</button> : null }
                    {selectedItem === "In Progress" ? <button className = "select"><img className = "imghelp" src = {study} alt = "my image" style={{ height: '50%',width: '100%'}}/>Let's study together</button> : null }
                    {selectedItem === "Failed" ? <button className = "select"><img className = "imghelp" src = {tea} alt = "my image" style={{ height: '50%',width: '100%'}}/>Let me pour you some tea</button> : null }
                    {selectedItem === "Failed" ? <button className = "select"><img className = "imghelp" src = {basketball} alt = "my image" style={{ height: '50%',width: '100%'}}/>Journey to dunking</button> : null }


                </div>

                <div className = "Liked"> Challenges you liked</div>
                <div className = "choices">
                    <button className = "select"><img className = "imghelp" src = {math} alt = "my image" style={{ height: '50%',width: '100%'}}/>Learn new Math concepts</button>
                    <button className = "select"><img className = "imghelp" src = {flowers} alt = "my image" style={{ height: '50%',width: '100%'}}/>Visit to Arboretum with us</button>
                    <button className = "select"><img className = "imghelp" src = {boardgames} alt = "my image" style={{ height: '50%',width: '100%'}}/>Beat me in chess</button>
                </div>
                
            </div>
        
        
            </div>
        </div>
    )
}

export default MyPage;