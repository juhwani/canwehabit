import React from 'react';
import Header from '../../components/header/header.js'
import "./home.css"
import setImg from "./image/Set.png";
import readyImg from "./image/Ready.png"
import goImg from "./image/Go.png"
import gymImg from "./image/Gym.png"
import mealsImg from "./image/Meals.png"
import studyImg from "./image/Study.png"
import travelImg from "./image/Travel.png"
import employeeImg from "./image/Employee.png"

function home() {
    return(
        <div id="home">
            <Header/>
            <div className= "section1">
                <p className="make-text">Let's Make Habit</p>
                <p className="grow-text">Grow Together</p>
                <div className="yoga-transparent">
                    <h5>Can we Have it?</h5>
                    <h6>Gather friends to make habits</h6>
                    <button className="start-button">Start!</button>
                </div>
            </div>
            <div className="section2">
                    <div className= "section2-title">
                        <h4>Raised</h4>
                        <h4>$1,203,032.10</h4>
                    </div>
                    <h4>To PSU Library</h4>
            </div>
            <div className="section3">
                <h4>STEPS</h4>
                <div className="section3-content">
                    <div>
                        <p>SET</p>
                        <img className="content-square" src={setImg}></img>
                        <h6 className="content-square-desc">Set your goals or habits that you want to make</h6>
                    </div>
                    <div>
                        <p>READY</p>
                        <img className="content-square" src={readyImg}></img>
                        <h6 className="content-square-desc">Gather people who wanted to achieve goal together</h6>
                    </div>
                    <div>
                        <p>GO!</p>
                        <img className="content-square" src={goImg}></img>
                        <h6 className="content-square-desc">Start goal with your friends and make it success</h6>
                    </div>
                </div>
            </div>
            <div className="section4">
                <p className="section4-title">Popular Goals</p>
                <div className="section4-content">
                    <div className="goals-square">
                        <img className="content-square1" src={gymImg}></img>
                        <h6 className="content-square1-desc">Going to the gym every day</h6>
                        <h6 className="content-square1-points ">500pt</h6>
                    </div>
                    <div className="goals-square">
                        <img className="content-square1" src={mealsImg}></img>
                        <h6 className="content-square1-desc">Get meals on Time</h6>
                        <h6 className="content-square1-points ">500pt</h6>
                    </div>
                    <div className="goals-square">
                        <img className="content-square1" src={studyImg}></img>
                        <h6 className="content-square1-desc">Study 1 hour daily</h6>
                        <h6 className="content-square1-points ">500pt</h6>
                    </div>
                    <div className="goals-square">
                        <img className="content-square1" src={travelImg}></img>
                        <h6 className="content-square1-desc">Go travel every week</h6>
                        <h6 className="content-square1-points ">500pt</h6>
                    </div>
                </div>
                <p className="see-more">See More -> </p>
            </div>
            <div className="section5">
                <img src= {employeeImg} width = "300px" height="330px"/>
                <div className="section5-text">
                    <h3 className="section5-title">
                        Invest Money
                    </h3>
                    <p className="section5-desc">
                        Put Money on the goals! If you success, get your money with price. If fails, it donates to the charity.
                    </p>
                </div>
            </div>
            </div>
        
    )
}

export default home;