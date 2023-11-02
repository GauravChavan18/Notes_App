import React, { useEffect, useState } from "react";
import "../Styles/PopupPage.css";
import data from "../data.js";

const PopupPage = ({ newgrpdata, setnewgrpdata }) => {
  const [groupname, setgroupname] = useState("");
  const [colortype, setcolortype] = useState();
  function changehandler(event) {
    setgroupname(event.target.value);
  }

  function colorselectfun(val) {
    setcolortype(val);
  }
  function createnewgroup() {
    setnewgrpdata((prevData) => [...prevData, { groupname, colortype }]);
    //console.log(newgrpdata);
  }
  useEffect(() => {
    console.log(newgrpdata);
  }, [newgrpdata]);

  return (
    <div className="popuppage-div">
      <p className="popup-header">Create New Notes group</p>
      <div className="popupinput-div">
        <span>Group Name</span>
        <input
          type="text"
          placeholder="Enter your group name...."
          className="popup-input"
          onChange={changehandler}
          value={groupname}
          required
        />
      </div>
      <div className="popupinput-div">
        <span>Choose Colour</span>
        <div className="colors-div">
          {data.map((item, index) => (
            <div
              key={index}
              className="color-div"
              style={{ backgroundColor: `${item.bgcolor}` }}
              onClick={() => colorselectfun(item.bgcolor)}
            ></div>
          ))}
        </div>
      </div>
      <button className="CreateButton" onClick={createnewgroup}>
        Create
      </button>
    </div>
  );
};

export default PopupPage;
