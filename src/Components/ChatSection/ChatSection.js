import React, { useState } from "react";
import "./ChatSection.css";
import { IoSend } from "react-icons/io5";
const ChatSection = ({ openchatbox, newgrpdata }) => {
  const [chats, setchats] = useState([]);
  const [chatinput, setchatinput] = useState();
  let today = new Date().toUTCString().substring(5, 16);
  let ctime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  function chatinputhandler(event) {
    setchatinput(event.target.value);
  }

  function chatsubmit() {
    setchats((chats) => [...chats, { openchatbox, chatinput, ctime, today }]);
  }

  return (
    <div className="chatsection-div">
      <div className="groupname-heading">
        {newgrpdata.map((item, index) => (
          <div
            className="chat-div"
            key={index}
            style={
              openchatbox === index
                ? {
                    display: "flex",
                    margin: 0,
                  }
                : { display: "none" }
            }
          >
            <div
              style={{ backgroundColor: `${item.colortype}` }}
              className="chat-circle"
            >
              {item.groupname.substring(0, 2).toUpperCase()}
            </div>
            <p className="chat-name">{item.groupname}</p>
          </div>
        ))}
      </div>

      <div className="notes-div">
        {chats.map((item, index) =>
          openchatbox === item.openchatbox ? (
            <div key={index} className="notesection-div">
              <div className="current-td-div">
                <p className="current-time-para">{item.ctime}</p>
                <p className="current-date-para">{item.today}</p>
              </div>
              <p className="inputnote-para">{item.chatinput}</p>
            </div>
          ) : null
        )}
      </div>

      <div className="chatinput-div">
        <textarea
          type="text"
          placeholder="Enter your text here..........."
          className="input-box"
          onChange={chatinputhandler}
        />
        <IoSend className="send-icon" onClick={chatsubmit} />
      </div>
    </div>
  );
};

export default ChatSection;
