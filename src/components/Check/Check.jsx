import React, { useState, useEffect } from "react";  
import check from "../../assets/check.png";
import './Check.scss';
import '../../pages/QrCodes/QrCodes.scss'

export function Check(props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false)

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

  const handleImageClick = (props) => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <img 
        src={check} 
        alt="check" 
        className="check" 
        style={{ top: `${props.top}px` }} 
        onClick={handleImageClick}
      />
      {isPopupVisible && (
        <div className="popup" onClick={handleImageClick}>
          <div className="popup-content popup-content-mobile">
            {!isSmallScreen ? <img src={props.img} alt="popup-check" /> : <div className="link-wrapper-check">
              <a href={props.link}>{props.text}</a>
            </div>}
          </div>
        </div>)}
    </div>
  );
}
