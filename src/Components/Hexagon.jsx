// src/components/Hexagon.js
import React from "react";

const Hexagon = ({ children }) => {
  return (
    <div className="hexagon">
      <div className="hexagon-inner">
        <div className="hexagon-content">{children}</div>
      </div>
    </div>
  );
};

export default Hexagon;
