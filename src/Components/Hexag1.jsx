import React from "react";
import "./Hexag1.css";

const Hexag1 = ({ src, alt }) => {
  return (
    <div className="hexag1">
      <div className="hexag1-inner" style={{ backgroundImage: `url(${src})` }}>
        <img src={src} alt={alt} className="hexag1-icon" />
      </div>
    </div>
  );
};

export default Hexag1;
