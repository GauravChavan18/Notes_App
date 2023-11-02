import { useState } from "react";
import "./App.css";
import DisplayPage from "./Pages/DisplayPage";
import PopupPage from "./Pages/PopupPage";
import OverlayPage from "./Pages/OverlayPage";

function App() {
  const [ismodalopen, setmodalopen] = useState(false);
  const [newgrpdata, setnewgrpdata] = useState([]);

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <DisplayPage
        ismodalopen={ismodalopen}
        setmodalopen={setmodalopen}
        newgrpdata={newgrpdata}
      />
      {ismodalopen ? (
        <PopupPage newgrpdata={newgrpdata} setnewgrpdata={setnewgrpdata} />
      ) : null}
      {ismodalopen ? (
        <OverlayPage ismodalopen={ismodalopen} setmodalopen={setmodalopen} />
      ) : null}
    </div>
  );
}

export default App;
