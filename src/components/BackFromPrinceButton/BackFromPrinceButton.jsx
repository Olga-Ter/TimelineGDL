import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './BackFromPrinceButton.scss';

export function BackFromPrinceButton(props) {
  const navigate = useNavigate();

  function handleOnClick(event) {
    navigate('/');
  }

  return (
      <button className={`back-button ${props.cl}`} onClick={handleOnClick}></button>
  );
}
