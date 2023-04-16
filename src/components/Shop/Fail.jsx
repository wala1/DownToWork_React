import React from "react";
import { useLocation } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import "./fail.css";
function Fail() {
  const location = useLocation();

  return (
    <div className="fail">
      <div id="cardF" className="animated fadeIn">
        <div id="upper-sideF">
          <CancelIcon id="checkmark" />
          <h3 id="statusF"> paiment failed</h3>
        </div>
        <div id="lower-sideF">
          <p id="messageF">{location.state.data}</p>
          <a href="#" id="contBtnF">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fail;
