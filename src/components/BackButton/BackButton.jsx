import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.scss';

export function BackButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {  // Порог, после которого кнопка становится видимой
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleOnClick() {
    navigate('/');
  }

  return (
    <div className={`back-button-wrapper ${isVisible ? 'visible' : ''}`} onClick={handleOnClick}>
      <a href="#">
        <div className="back-button-sticky"></div>
      </a>
    </div>
  );
}
