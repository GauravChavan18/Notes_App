import React from "react";
import "./NotesDisplay.css";
import NotesBackG from "../NotesBackGround/NotesBackG";
import ChatSection from "../ChatSection/ChatSection";
const NotesDisplay = ({ setopenchatbox, openchatbox }) => {
  return (
    <div className="NotesDisplay-div">
      {openchatbox === -1 ? <NotesBackG /> : <ChatSection />}
    </div>
  );
};

export default NotesDisplay;
