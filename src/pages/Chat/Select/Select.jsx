import React from "react";
import "./Select.css";
import Fade from "react-reveal/Fade";

const Select = ({ options, handleSelectedOptions }) => {
  return (
    <Fade right>
      <div className="selector-content">
        <div className="selector-container">
          {options.map((op) => (
            <div
              key={op.id}
              className="selector-options"
              onClick={(e) => handleSelectedOptions(op.id)}
            >
              <label> {op.text}</label>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Select;
