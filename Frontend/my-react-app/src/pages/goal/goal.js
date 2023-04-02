import React from 'react';
import "./goal.css"
import gymImg from "../image/Gym.png"
import mealsImg from "../image/Meals.png"
import studyImg from "../image/Study.png"
import travelImg from "../image/Travel.png"
import OceanImg from "../image/Ocean.png"
import magnifyingImg from "../image/magnifying.png"
import Header from '../../components/header/header';
import {Link} from "react-router-dom"



function goal() {
    return(

        <div id ="goalList">
            <Header/>
        <div className = "goalList-wrapper">
             <div className='search'>
                <input type="text"placeholder="Search any goals" ></input>
                <button className = "search-button" type="submit">
                    <img src= {magnifyingImg} height="30px"/>
                </button>
            </div>

            <div className="section4">
                <p className="section4-title">Recommend for you</p>
                <div className="section4-content">
                    <Link to = "/goals">
                    <button className="goals-square">
                        <img className="content-square1" src={gymImg}></img>
                        <h6 className="content-square1-desc">Going to the gym every day</h6>
                    </button>
                    </Link>
                    <button className="goals-square">
                        <img className="content-square1" src={mealsImg}></img>
                        <h6 className="content-square1-desc">Get meals on Time</h6>
                    </button>
                    <button className="goals-square">
                        <img className="content-square1" src={studyImg}></img>
                        <h6 className="content-square1-desc">Study 1 hour daily</h6>
                    </button>
                    <button className="goals-square">
                        <img className="content-square1" src={travelImg}></img>
                        <h6 className="content-square1-desc">Go travel every week</h6>
                    </button>
                </div>
            </div>
            

            <div className="section4">
                <p className="section4-title">Popular Challenges</p>
                <div className="section4-content">
                    <button className="goals-square">
                        <img className="content-square1" src={gymImg}></img>
                        <h6 className="content-square1-desc">Going to the gym every day</h6>
                    </button>
                    <button className="goals-square">
                        <img className="content-square1" src={mealsImg}></img>
                        <h6 className="content-square1-desc">Get meals on Time</h6>
                    </button>
                    <button className="goals-square">
                        <img className="content-square1" src={studyImg}></img>
                        <h6 className="content-square1-desc">Study 1 hour daily</h6>
                    </button>
                    <button className="goals-square">
                        <img className="content-square1" src={travelImg}></img>
                        <h6 className="content-square1-desc">Go travel every week</h6>
                    </button>
                </div>
            </div>

            <div>
                 {/* <img className="bottom" src={OceanImg}>
                 </img> */}

            </div>
        </div>
        </div>

    )
}

export default goal;