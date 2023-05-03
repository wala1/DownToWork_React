import React, { useState, useEffect } from "react";
import "./Chrono.css";

function Timer() {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    if (time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleReset = () => {
    setIsActive(false);
    setTime(10);
  };

  return (
    <div className="timer-wrapper">
      <div className={`timer ${isActive ? "active" : ""}`}>
        <div className="timer-fill"></div>
        <div className="timer-label">{time}</div>
      </div>
      {time === 0 && (
        <></>
        // <div>
        //   <p>Time is up!</p>
        //   <button className="btn-reset" onClick={handleReset}>
        //     Reset
        //   </button>
        // </div>
      )}
    </div>
  );
}

export default Timer;
