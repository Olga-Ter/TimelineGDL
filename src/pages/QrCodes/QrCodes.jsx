import React, { useEffect, useState } from "react";
import "../InfoPage/InfoPage/InfoPage.scss";
import image from '../../assets/gold.svg';
import { BackFromPrinceButton } from "../../components/BackFromPrinceButton/BackFromPrinceButton";
import './QrCodes.scss';
import qr0 from '../../assets/qr0.svg';
import qr1 from '../../assets/qr1.svg';
import qr2 from '../../assets/qr2.svg';
import qr3 from '../../assets/qr3.svg';
import qr4 from '../../assets/qr4.svg';
import qr5 from '../../assets/qr5.svg';

const qrCodes = [
  {
    image: qr0,
    text: 'Укрепление великокняжеской власти',
    link: "https://learningapps.org/view10657437"
  },
  {
    image: qr1,
    text: '«Великая война» и Грюнвальдская война',
    link: "https://learningapps.org/view17331095"
  },
  {
    image: qr2,
    text: 'Гражданская война 1432-1439',
    link: "https://learningapps.org/view17469402"
  },
  {
    image: qr3,
    text: 'Образование ВКЛ',
    link: "https://learningapps.org/view16332313"
  },
  {
    image: qr4,
    text: 'ВКЛ в XIII-XIV вв.',
    link: "https://learningapps.org/watch?v=ptxx7ecwk23"
  },
  {
    image: qr5,
    text: 'Сближение ВКЛ с Польшей',
    link: "https://learningapps.org/view3163944"
  }
];

export function QrCodes() {
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
    <div className="qr-wrapper">
      <div className="info-page-qr qr-page">
        <img src={image} alt="header" className="headerInfo" />
        <BackFromPrinceButton cl={'back-qrcodes'}/>
        <div className="grid-container">
          {qrCodes.map((qrCode, index) => (
            <div key={index} className="grid-item">
              {isSmallScreen ? (
                <>
                  <div className="link-wrapper">
                    <a href={qrCode.link}>{qrCode.text}</a>
                  </div>
                </>
              ) : (
                <>
                  <img src={qrCode.image} alt={qrCode.text} />
                  <p>{qrCode.text}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <img src={image} alt="footer" className="footer" />
      </div>
    </div>
  );
}
