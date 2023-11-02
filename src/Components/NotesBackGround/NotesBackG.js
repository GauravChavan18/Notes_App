import React from "react";
import mainimg from "../../Assests/image-removebg-preview 1.png";
import "./NotesBackG.css";

const NotesBackG = () => {
  return (
    <div className="NotesBackG-div">
      <img src={mainimg} className="main-img" alt="main" />
      <p className="main-header">Pocket Notes</p>
      <p className="main-para">
        Send and receive messages without keeping your phone online. <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
  );
};

export default NotesBackG;
