import React from "react";
import { useState, useEffect } from "react";
import "./CopyRight.scss";
import img from "../../assets/mrk.svg"

export function CopyRight() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="copy-right">
      {!isSmallScreen && (
      <img src={img} alt="" />
      )}
      <p>Copyright © Гуринович Валерия Вячеславовна</p>
    </div>
  );
}