import React from "react";
import "./NotesDisplay.css";
import NotesBackG from "../NotesBackGround/NotesBackG";
import ChatSection from "../ChatSection/ChatSection";
const NotesDisplay = ({ openchatbox, newgrpdata }) => {
  return (
    <div className="NotesDisplay-div">
      {openchatbox === -1 ? (
        <NotesBackG />
      ) : (
        <ChatSection newgrpdata={newgrpdata} openchatbox={openchatbox} />
      )}
    </div>
  );
};

export default NotesDisplay;
