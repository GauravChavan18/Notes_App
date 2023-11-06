import React, { useState } from "react";
import Dashboard from "../Components/DashBoard/Dashboard";
import NotesDisplay from "../Components/NotesDisplay/NotesDisplay";
import "../Styles/DisplayPage.css";
const DisplayPage = ({
  ismodalopen,
  setmodalopen,
  newgrpdata,
  setnewgrpdata,
}) => {
  const [openchatbox, setopenchatbox] = useState(-1);
  const [changepage, setchangepage] = useState(false);
  return (
    <div className="DisplayPage-div">
      <Dashboard
        ismodalopen={ismodalopen}
        setmodalopen={setmodalopen}
        newgrpdata={newgrpdata}
        openchatbox={openchatbox}
        setopenchatbox={setopenchatbox}
        changepage={changepage}
        setchangepage={setchangepage}
        setnewgrpdata={setnewgrpdata}
      />
      <NotesDisplay
        newgrpdata={newgrpdata}
        openchatbox={openchatbox}
        setopenchatbox={setopenchatbox}
        changepage={changepage}
        setchangepage={setchangepage}
      />
    </div>
  );
};

export default DisplayPage;
