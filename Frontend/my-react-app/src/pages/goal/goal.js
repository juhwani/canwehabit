import React from 'react';
import "./goal.css"
import gymImg from "../image/Gym.png"
import mealsImg from "../image/Meals.png"
import studyImg from "../image/Study.png"
import travelImg from "../image/Travel.png"
import OceanImg from "../image/Ocean.png"

function home() {
    return(
        <div>
             <div className='search'>
                <input type="text"placeholder="Search any goals" ></input>
                <button type="submit">
                    img
                </button>
                
            </div>

            <div className="section4">
                <p className="section4-title">Recommend for you</p>
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
                 <img className="bottom" src={OceanImg}>
                 </img>

            </div>
        </div>

    

    )
}

export default home;