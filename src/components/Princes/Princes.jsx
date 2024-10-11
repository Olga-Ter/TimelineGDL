import React from "react";
import './Princes.scss'
import '../PrincePortrait/PrincePortrait.scss'
import { useState, useEffect } from "react";
import { PrincePortrait } from "../PrincePortrait/PrincePortrait";
import Mindovg from "../../assets/Mindovg.svg"
import Troynat from "../../assets/Troynat.svg"
import Voyshelk from "../../assets/Voyshelk.svg"
import Shvarn from "../../assets/Shvarn.svg"
import Troyden from "../../assets/Troyden.svg"
import Dovomont from "../../assets/Dovomont.svg"
import Budikid from "../../assets/Budikid.svg"
import Budivid from "../../assets/Budivid.svg"
import Viten from "../../assets/Viten.svg"
import Gedimin from "../../assets/Gedimin.svg"
import Evnut from "../../assets/Evnut.svg"
import Olgerd from "../../assets/Olgerd.svg"
import Yagaylo from "../../assets/Yagaylo.svg"
import Keystut from "../../assets/Keystut.svg"
import Vitovt from "../../assets/Vitovt.svg"
import Svidrigaylo from "../../assets/Svidrigaylo.svg"
import Sizigmund from "../../assets/Sizigmund.svg"
import Kazimir from "../../assets/Kazimir.svg"
import Alexander from "../../assets/Alex.svg"
import Sizigmund1 from "../../assets/SizigmundOld.svg"
import Sizigmund2 from "../../assets/SizigmundAugust.svg"
import TroynatImg from "../../assets/Тройнат 2.svg"
import VoyshelkImg from "../../assets/Войшелк_возвращается_в_монастырь 1.svg"
import VitenImg from "../../assets/Витень 2 1.svg"
import GedeminImg from "../../assets/Карта при Гедимине 1.svg"
import EvnutImg from "../../assets/Евнут 2.svg"
import OlgerdImg from "../../assets/Ольгерд 2.svg"
import YagayloImg from "../../assets/Ягайло 2.svg"
import KeystutImg from "../../assets/Кейстут 2.svg"
import VitovtImg from "../../assets/Витовт 2.svg"
import SvidrigayloImg from "../../assets/Свидригайло 2.svg"
import SizigmundImg from "../../assets/Сигизмунд 2.svg"
import KazimirImg from "../../assets/Казимир 2.svg" 
import AlexanderImg from "../../assets/Александр 1 1.png"
import Sizigmund1Img from "../../assets/Сигизмунд 2 1.png"
import Sizigmund2Img from "../../assets/Сигизмунд и Барбара Радзивилл 1.png"
import { AlexanderText, EvnutText, GediminText, KazimirText, KeystutText, OlgerdText, Sizigmund1Text, Sizigmund2Text, SizigmundText, SvidrigayloText, TroynatText, VitenText, VitovtText, VoyshelkText, YagayloText } from "./texts/texts";

const MindovgObject = {
  num: 6,
  par: 1,
  coords: 100,
  name: 'Mindovg',
  ruName: 'Миндовг',
  image: Mindovg
}

const TroynatObject = {
  num: 6,
  par: 1,
  coords: 170,
  name: 'Troynat',
  ruName: 'Тройнат',
  image: Troynat,
  articleImg: TroynatImg 
}

const VoyshelkObject = {
  num: 6,
  par: 1,
  coords: 190,
  name: 'Voyshelk',
  ruName: 'Войшелк',
  image: Voyshelk,
  articleImg: VoyshelkImg 
}

const ShvarnObject = {
  num: 6,
  par: 1,
  coords: 250,
  name: 'Shvarn',
  ruName: 'Шварн',
  image: Shvarn
}

const TroydenObject = {
  num: 6,
  par: 1,
  coords: 300,
  name: 'Troyden',
  ruName: 'Тройден',
  image: Troyden
}

const DovomontObject = {
  num: 6,
  par: 1,
  coords: 360,
  name: 'Dovomont',
  ruName: 'Довомонт',
  image: Dovomont
}

const BudikidObject = {
  num: 6,
  par: 1,
  coords: 410,
  name: 'Budikid',
  ruName: 'Будикид',
  image: Budikid
}

const BudividObject = {
  num: 6,
  par: 1,
  coords: 490,
  name: 'Budivid',
  ruName: 'Будивид',
  image: Budivid
}

const VitenObject = {
  num: 6,
  par: 1,
  coords: 520,
  name: 'Viten',
  ruName: 'Витень',
  image: Viten,
  articleImg: VitenImg
}

const GediminObject = {
  num: 6,
  par: 2,
  coords: 720,
  name: 'Gedimin',
  ruName: 'Гедимин',
  image: Gedimin,
  articleImg: GedeminImg
}

const EvnutObject = {
  num: 6,
  par: 2,
  coords: 740,
  name: 'Evnut',
  ruName: 'Евнут',
  image: Evnut,
  articleImg: EvnutImg
}

const OlgerdObject = {
  num: 6,
  par: 2,
  coords: 760,
  name: 'Olgerd',
  ruName: 'Ольгерд',
  image: Olgerd,
  articleImg: OlgerdImg
}

const YagayloObject = {
  num: 6,
  par: '3, 7-8',
  coords: 910,
  name: 'Yagaylo',
  ruName: 'Ягайло',
  image: Yagaylo,
  articleImg: YagayloImg
}

const KeystutObject = {
  num: 6,
  par: '3, 7-8',
  coords: 920,
  name: 'Keystut',
  ruName: 'Кейстут',
  image: Keystut,
  articleImg: KeystutImg
}

const VitovtObject = {
  num: 6,
  par: '3, 7-8',
  coords: 940,
  name: 'Vitovt',
  ruName: 'Витовт',
  image: Vitovt,
  articleImg: VitovtImg
}

const SvidrigayloObject = {
  num: 6,
  par: 9,
  coords: 1150,
  name: 'Svidrigaylo',
  ruName: 'Свидригайло',
  image: Svidrigaylo,
  articleImg: SvidrigayloImg
}

const SizigmundObject = {
  num: 6,
  par: 9,
  coords: 1140,
  name: 'Sizigmund',
  ruName: 'Сизигмунд',
  image: Sizigmund,
  articleImg: SizigmundImg
}

const KazimirObject = {
  num: 6,
  par: 9,
  coords: 1200,
  name: 'Kazimir',
  ruName: 'Казимир',
  image: Kazimir,
  articleImg: KazimirImg
}

const AlexanderObject = {
  num: 7,
  par: '1-2',
  coords: 1400,
  name: 'Alexander',
  ruName: 'Александр',
  image: Alexander,
  articleImg: AlexanderImg
}

const Sizigmund1Object = {
  num: 7,
  par: '1-2',
  coords: 1400,
  name: 'Sizigmund1',
  ruName: 'Сигизмунд 1',
  image: Sizigmund1,
  articleImg: Sizigmund1Img
}

const Sizigmund2Object = {
  num: 7,
  par: 8,
  coords: 1400,
  name: 'Sizigmund2',
  ruName: 'Сигизмунд 2',
  image: Sizigmund2,
  articleImg: Sizigmund2Img
}

let princes = [
  MindovgObject, TroynatObject, VoyshelkObject, ShvarnObject, TroydenObject, 
  DovomontObject, BudikidObject, BudividObject, VitenObject, GediminObject, 
  EvnutObject, OlgerdObject, YagayloObject, KeystutObject, VitovtObject, 
  SvidrigayloObject, SizigmundObject, KazimirObject, AlexanderObject, 
  Sizigmund1Object, Sizigmund2Object
];


export function Princes() {

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

  const bigCoords = [0, 250, 430, 600, 850, 1100, 1250, 1550, 1650, 2450, 2400, 2500, 3100, 3100, 3400, 4000, 4050, 4400, 5000, 5100, 5130]

  return (
    <div className="princes">
      {princes.map((prince, index) => (
        <PrincePortrait articleImg={prince.articleImg} name={prince.name} alt={prince.name} coordinates={!isSmallScreen ? bigCoords[index]-580 : prince.coords-580} class={
          index < 9 || (index > 11 && index < 15) ||(index > 17 && index < 22)?
            index % 2 === 0 ? 'odd' : 'even' :
            index % 2 === 0 ? 'even' : 'odd'         
        } url={prince.image} ruName={prince.ruName} par={prince.par} num={prince.num} uniqueId={index} key={index} onClick={() => {navigator(`/info/${prince.name.toLowerCase()}`)}}></PrincePortrait>
      ))}
    </div>
  );
}