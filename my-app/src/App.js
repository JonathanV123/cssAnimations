import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [checkBox, setCheckBox] = useState(false);
  console.log(checkBox);
  return (
    <>
      Animation 1
      <div className="Animation1">
        <div id="my-container">
          <div className="wrapper">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      Animation 2
      <div
        className="Animation2"
        onClick={() => {
          console.log("checked");
          setCheckBox(!checkBox);
        }}
      >
        {checkBox === true ? (
          <svg
            id={checkBox === true ? "successAnimation" : ""}
            className="animated"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <path
              id={checkBox === true ? "successAnimationResult" : ""}
              fill="green"
              d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
            />
            <circle
              id={checkBox === true ? "successAnimationCircle" : ""}
              // id="successAnimationCircle"
              cx="35"
              cy="35"
              r="24"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              fill="transparent"
            />
            <polyline
              id={checkBox === true ? "successAnimationCheck" : ""}
              id="successAnimationCheck"
              stroke="green"
              strokeWidth="2"
              points="23 34 34 43 47 27"
              fill="transparent"
            />
          </svg>
        ) : null}
     <div class="sp sp-wave"></div>
      </div>
      <div id="animation3Wrapper">
        Animation 3<div className="animation3"></div>
        <div className="animation3"></div>
        <div className="animation3"></div>
        <div className="animation3"></div>
      </div>
      Animation 4
      <div className="animation4Wrapper">
        <div className="loader">Loading...</div>
     
      </div>
  
    </>
  );
}

export default App;
