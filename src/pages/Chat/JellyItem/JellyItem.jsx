import React from "react";
import "./JellyItem.css";
import jellyAvatar from "../../../assets/images/Jelly.png";
import Fade from "react-reveal/Fade";

const JellyItem = ({ text }) => {
  return (
    <div className="jelly-item-container">
      <img src={jellyAvatar} alt="jelly-avatar" />
      <div className="jelly-item-messages">
        {text.map((t, index) => (
          <Fade>
            <label key={index}> {t} </label>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default JellyItem;
