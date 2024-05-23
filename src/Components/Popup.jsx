import React from "react";
import "./Popup.css";

const Popup = ({ service, message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{service}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
