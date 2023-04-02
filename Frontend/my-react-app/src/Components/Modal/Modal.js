import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
            
          </button>
        </div>
        <div className="title">
          <div className="Charity">
            Which Charity you want to donate (When you fail the goals)
          </div>
        </div>
        <div className="body">
          <button
            className={selectedItem === "Scholarships" ? "two" : "one"}
            onClick={() => handleItemClick("Scholarships")}
          >
            Scholarships
          </button>
          <button
            className={selectedItem === "Make-a-wish Foundation" ? "two" : "one"}
            onClick={() => handleItemClick("Make-a-wish Foundation")}
          >
            Make-a-wish Foundation
          </button>
          <button
            className={selectedItem === "Volunteer Organization" ? "two" : "one"}
            onClick={() => handleItemClick("Volunteer Organization")}
          >
            Volunteer Organization
          </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button className="donate">Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
