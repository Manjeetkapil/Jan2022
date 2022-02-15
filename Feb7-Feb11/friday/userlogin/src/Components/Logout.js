import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const history = useNavigate();
  const handleClick = () => {
    console.log("clicking this")
    localStorage.removeItem("UserId");
    history("/login");
  };
  return <button className="button" onClick={handleClick}>Logout</button>;
}

export default Logout;
