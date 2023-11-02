import React from "react";
import "./Dashboard.css";
import { BsPlusCircleFill } from "react-icons/bs";

const Dashboard = ({
  ismodalopen,
  setmodalopen,
  newgrpdata,
  setopenchatbox,
  openchatbox,
}) => {
  function openmodalfunc() {
    setmodalopen(true);
  }

  function chatdivclick(id) {
    setopenchatbox(id);
    console.log("clicked on id", id);
  }
  return (
    <div className="DashBoard-div">
      <h1 className="DashBoard-header">Pocket Notes</h1>

      <button className="DashBoard-button" onClick={openmodalfunc}>
        <BsPlusCircleFill />
        Create Notes group
      </button>

      <div
        className="chatbox-div"
        style={
          newgrpdata.length > 8 ? { overflowY: "scroll" } : { overflow: "none" }
        }
      >
        {newgrpdata.map((item, index) => (
          <div
            className="chat-div"
            key={index}
            onClick={() => chatdivclick(index)}
            style={
              openchatbox === index ? { backgroundColor: "#F7ECDC" } : null
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
    </div>
  );
};

export default Dashboard;
