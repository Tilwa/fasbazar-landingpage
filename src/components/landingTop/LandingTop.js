import React from "react";
import "./LandingTop.css";
import Timer from "../timer/Timer";
const LandingTop = () => {
  function URL() {
    window.open("https://fasbazar.com/", "_blank");
  }
  return (
    <div className="top">
      <div className="navbar" onClick={URL}>
        <div className="header">
          <div className="twologo" onClick={URL}>
            <img className="logo" src={require("../../assets/abc.png")} />
            <div className="moon "></div>
          </div>

          <div className="title">
            {" "}
            <Timer />
            <div className="btns">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Login</span>
              </button>
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Signup</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="btn" onClick={URL}></button>
        </div>
      </div>
    </div>
  );
};

export default LandingTop;
