import React from 'react'; 
import "../../pages/add/add.css"
import {SidebarData} from './SidebarData'

function header(){
    return ( 
    <div className='Sidebar'>
            <div className='logo'>
            Can We Habit?
            </div>
            <div className = "header-font">
                😊Jane Doe
            </div>
                
            
        <ul className="SidebarList">
            {SidebarData.map((val, key) => {
                return (
                <li 
                key={key}
                className='row'
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={()=>{
                    window.location.pathname = val.link
                    }}
                    >
                    {" "}
                    <div id='icon'>
                        {val.icon}
                    </div>{" "}
                    <div id='title'>
                        {val.title}
                    </div>
                </li>
                );
            })}
        </ul>
    </div>
    );
}

export default header;