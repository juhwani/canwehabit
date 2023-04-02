import React from 'react';
import MyContainer from './MyContainer';
import "./challenges2.css"
import Header from '../../components/header/header';
import {Link} from "react-router-dom"


function challenges2() {

    return (
        <div id="challenges2">
            <Header></Header>    
            <div style={{ textAlign: 'left', margin: '0 100px', }}>
            <MyContainer>
                <MyContainer>
                <h1>Challenge Title:
                    <input className='input'></input>
                </h1>
                </MyContainer>

                <MyContainer>
                <h1>Add image: </h1>
                <div>
                <button className='button2'> +</button>
                <button className='button2'> +</button>
                </div>
                </MyContainer>

                <MyContainer>
                <h1>How long do you want this challenge to be?</h1>
                <button className='button'> 1week</button>
                <button className='button'> 2week</button>
                <button className='button'> 3week</button>
                </MyContainer>

                <MyContainer>
                <h1>Choose the category of this challenge.</h1>
                <button className='button'> Academic</button>
                <button className='button'> Health</button>
                <button className='button'> Diet</button>
                </MyContainer>

                <MyContainer>
                <h1>How frequent would you like to take a verification picture per day?</h1>
                <button className='button'> Once</button>
                <button className='button'> Twice</button>
                <button className='button'> 3 times</button>
                </MyContainer>

                <MyContainer>
                <h1>Set the start goal time</h1>
                <button className='button'> Starting Date</button>
                <button className='button'>End Date</button>

                </MyContainer>

                <MyContainer>
                <h1>Which Charity do you want to doonate to?(when failed the goal) </h1>
                <button className='button'> Charity</button>
                <button className='button'> PSU Organization</button>
                <button className='button'> Orphanage</button>

                <MyContainer>
                <h1>Points that you set</h1>
                <input className='input2'></input>
                <div>
                <button className='post'> 
                <Link to = "/goal">
                Start
                </Link>
                </button>
                </div>
                </MyContainer>


                </MyContainer>
            </MyContainer>
            </div>
        </div>
      );
    }

export default challenges2;

