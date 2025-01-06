import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/thanks.css";
import ThanksImg from "../assets/icon/accept.png";

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <div className="thanks-container">
      <img src={ThanksImg} alt="" />
      <br />
      <h1>Thank You!</h1>
      <h2>Form submitted successfully!</h2>
      <p>
        The form has been submitted successfully. We will reply to you soon!
      </p>
      <div className="button-group">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default Thanks;
