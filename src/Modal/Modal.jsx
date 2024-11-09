import React from "react";
import "./Modal.css";
import guestspeakers from '../assets/guestspeakers.png'

const Modal = ({ onClose }) => {
  return (
    <div className="modalcontainer" onClick={(e) => {
    if (e.target.className === 'modalcontainer') {
        onClose();
    }
    }}
    >
      <div className="modal">
        <div className="modalheader">
          <div className="headercontent">
            <h1>Event Name</h1>
            <p>Event Data</p>
          </div>
          <p className="close" onClick={onClose}>
            &times;
          </p>
        </div>
        <div className="modalcontent">
          <div className="eventdescription">Event Description</div>
          <div className="eventdetails">
            <img src={guestspeakers} />
            <div>
              3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.
            </div>
            <div>300 Attendees</div>
          </div>
        </div>
        <div className="modalfooter">
          <button className="btn editbtn">Edit</button>
          <div>
            <button className="btn deletebtn">Delete</button>
            <button className="btn completedbtn">Mark as Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
