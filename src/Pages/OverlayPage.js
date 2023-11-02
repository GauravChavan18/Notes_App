import React from "react";
import "../Styles/OverlayPage.css";
const OverlayPage = ({ ismodalopen, setmodalopen }) => {
  function closemodalfun() {
    setmodalopen(false);
  }
  return <div className="overlay" onClick={() => closemodalfun()}></div>;
};

export default OverlayPage;
