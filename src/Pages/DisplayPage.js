import React, { useState } from "react";
import Dashboard from "../Components/DashBoard/Dashboard";
import NotesDisplay from "../Components/NotesDisplay/NotesDisplay";
import "../Styles/DisplayPage.css";
const DisplayPage = ({ ismodalopen, setmodalopen, newgrpdata }) => {
  const [openchatbox, setopenchatbox] = useState(-1);
  return (
    <div className="DisplayPage-div">
      <Dashboard
        ismodalopen={ismodalopen}
        setmodalopen={setmodalopen}
        newgrpdata={newgrpdata}
        openchatbox={openchatbox}
        setopenchatbox={setopenchatbox}
      />
      <NotesDisplay openchatbox={openchatbox} setopenchatbox={setopenchatbox} />
    </div>
  );
};

export default DisplayPage;
