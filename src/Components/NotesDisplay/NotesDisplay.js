import React from "react";
import "./NotesDisplay.css";
import NotesBackG from "../NotesBackGround/NotesBackG";
import ChatSection from "../ChatSection/ChatSection";
const NotesDisplay = ({
  openchatbox,
  newgrpdata,
  setopenchatbox,
  changepage,
  setchangepage,
}) => {
  return (
    <div
      className={!changepage ? "NotesDisplay-div-mobile" : "NotesDisplay-div"}
    >
      {openchatbox === -1 ? (
        <NotesBackG />
      ) : (
        <ChatSection
          newgrpdata={newgrpdata}
          openchatbox={openchatbox}
          setopenchatbox={setopenchatbox}
          changepage={changepage}
          setchangepage={setchangepage}
        />
      )}
    </div>
  );
};

export default NotesDisplay;
