import React from "react";
import './Pictures.scss'
import Horse from '../../assets/1.png'
import FirstKnight from '../../assets/2.png'
import FirstCastle from '../../assets/3.png'
import SecondKnight from '../../assets/4.png'
import TirdKnight from '../../assets/6.png'
import SecondCastle from '../../assets/7.png'
import ThirdCastle from '../../assets/8.png'
import FourthCastle from '../../assets/9.png'
import SecondHorse from '../../assets/10.png'
import FifthCastle from '../../assets/11.png'
import FourthKnight from '../../assets/12.png'
import FifthKnight from '../../assets/13.png'
import SixthCastle from '../../assets/14.png'
import SixthKnight from '../../assets/15.png'
import Fight from '../../assets/16.png'
import SeventhCastle from '../../assets/17.png'
import EightsCastle from '../../assets/18.png'
import ThirdHorse from '../../assets/19.png'
import EighthCastle from '../../assets/20.png'
import SeventhKnight from '../../assets/21.png'
import NinthCastle from '../../assets/22.png'
import { Picture } from "../Picture/Picture";
import { useState, useEffect } from 'react';

export function Pictures(props) {
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
  let coordinates

  const pictures = [Horse, FirstKnight, FirstCastle, SecondKnight, TirdKnight, SecondCastle, ThirdCastle, FourthCastle, SecondHorse, FifthCastle, FourthKnight, FifthKnight, SixthCastle, SixthKnight, Fight, SeventhCastle, EightsCastle, ThirdHorse, EighthCastle, SeventhKnight, NinthCastle]
  if(isSmallScreen){
    coordinates = [350, 320, 350, 320, 320, 350, 360, 450, 560, 650, 680, 790, 850, 840, 880, 1000, 1020, 1120, 1190, 1100, 1092]
  } else{
    coordinates = [900, 700, 900, 900, 900, 1100, 1300, 1470, 2180, 2500, 2650, 3200, 3450, 3490, 3880, 4200, 4250, 4850, 5000, 5000, 5250]
  }

  return (
    <div className="pictures">
      {pictures.map((picture, index) => (
        <Picture alt={picture} coordinates={coordinates[index]-100} class={index < 9 || (index > 11 && index < 15) ||(index > 17 && index < 22)?
          index % 2 === 0 ? 'odd-picture' : 'even-picture' :
          index % 2 === 0 ? 'even-picture' : 'odd-picture'} url={pictures[index]} key={index} uniqueId={index}></Picture>
      ))}
    </div>
  )
}