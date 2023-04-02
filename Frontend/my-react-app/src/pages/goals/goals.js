import "./goals.css";
import gym from "./images/gym1.jpg";
import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal"
import Header from '../../components/header/header';

function Goals() {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div id = "goals">
            <Header></Header>    
        <div className="GoalContainer">
            <div className="contentContainer">
                <img id="gymimg" src={gym}/> 
                <div className = "Bar">
                    <p className = "Title">Let's Workout!</p>
                    <p className = "Point">&#128176; 5000pt</p>
                    <p className = "Point">&#128101; 1/8</p>
                </div>
                <p id="date">4/1/23 Saturday - 4/8/23 Saturday</p>

                <div className = "Box">
                    <div className="Row">
                        <div className="Column">
                            <p className = "Desc">&#128202;Verification Frequency</p>
                            <p className = "DescIn">3 times a week</p>
                        </div>
                        <div className="Column">
                            <p className = "Desc">&#128204; Verification Method</p>
                            <p className = "DescIn">Take a picture of the gym around you using the Live Camera and post it on CanWeHabit.</p>
                        </div>
                    </div>
                    <div className="Column">
                        <p className = "Desc">&#9989; Requirement</p>
                        <p className = "DescIn">Must take a picture at the gym</p>
                    </div>
                    <div className="Column">
                        <p className = "Desc">&#10024;Description</p>
                        <div id="descBG"> 
                            <p className = "DescIn">Hit the gym three times a week</p>
                        </div>
                    </div>
                </div>
                <button id="start" onClick={() => { setModalOpen(true); }}>
                    Start
                </button>
            </div>

            {/* Opens Modal */}
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </div>
    )
}

export default Goals;