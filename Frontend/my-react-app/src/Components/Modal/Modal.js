import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function Modal({ setOpenModal }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [goalAccepted, setGoalAccepted] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDonateClick = () => {
    setGoalAccepted(true);
  };
  const navigate = useNavigate();

  const navigateToMypage = () => {
    // 👇️ navigate to /home
    navigate('/mypage');
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
            
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        
        {goalAccepted ? (
            <p/>
        ) : (
          <div className="Charity">
              <div className="title">
            Which Charity you want to donate (When you fail the goals)
          </div>
        </div>
        )}
        {goalAccepted ? (
          <div className="body"><div className= "inside">Goal Accepted. Good luck!</div></div>
        ) : (
          <div className="body">
            <button
              className={selectedItem === "Scholarships" ? "two" : "one"}
              onClick={() => handleItemClick("Scholarships")}
            >
              Scholarships
            </button>
            <button className={selectedItem === "Make-a-wish Foundation" ? "two" : "one"}
              onClick={() => handleItemClick("Make-a-wish Foundation")}
            >Make-a-wish Foundation</button>
            <button className={selectedItem === "Volunteer Organization" ? "two" : "one"}
              onClick={() => handleItemClick("Volunteer Organization")}
            >Volunteer Organization</button>
            
          </div>
        )}
        <div className="footer">
          {!goalAccepted && (
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          )}
          {goalAccepted ? (
          <button
          className="back"
          onClick={handleDonateClick}
          onClick={() => {
            setOpenModal(false);
            
          }
          }
          onClick={navigateToMypage}
          
        >
          Back
        </button>
        ) : (
            <button
            className="donate"
            onClick={handleDonateClick}
            
            
          >
            Donate
          </button>
           )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
