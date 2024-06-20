import React from "react";
import './InfoPage.scss';
import image from '../../../assets/gold.svg';
import { PrincePortrait } from "../../../components/PrincePortrait/PrincePortrait";
import { BackFromPrinceButton } from "../../../components/BackFromPrinceButton/BackFromPrinceButton";
import { useLocation } from "react-router-dom";
import { TroynatText, VoyshelkText, VitenText, GediminText, EvnutText, OlgerdText, YagayloText, KeystutText, VitovtText, SvidrigayloText, SizigmundText, KazimirText, AlexanderText, Sizigmund1Text, Sizigmund2Text } from "../../../components/Princes/texts/texts";

export function InfoPage() {
    const location = useLocation();
    const { ruName, name, url, num, articleImg, par } = location.state || {};

    function renderText(){
      switch (name.toLowerCase()) {
        case 'troynat':
          return (
            <TroynatText />
          )
        case 'voyshelk':
          return (
            <VoyshelkText />
          )
        case 'viten':
          return (
            <VitenText />
          )
        case 'gedimin':
          return (
            <GediminText />
          )
        case 'evnut':
          return (
            <EvnutText />
          )
        case 'olgerd':
          return (
            <OlgerdText />
          )
        case 'yagaylo':
          return (
            <YagayloText />
          )
        case 'keystut':
          return (
            <KeystutText />
          )
        case 'vitovt':
          return (
            <VitovtText />
          )
        case 'svidrigaylo':
          return (
            <SvidrigayloText />
          )
        case 'sizigmund':
          return (  
            <SizigmundText />
          )
        case 'kazimir':
          return (
            <KazimirText />
          )
        case 'alexander':
          return (
            <AlexanderText />
          )
        case 'sizigmund1':
          return (
            <Sizigmund1Text />
          )
        case 'sizigmund2':
          return (
            <Sizigmund2Text />
          )
        default:
          return null;
      }
    }

    return (
        <div className="info-page">
            <img src={image} alt="header" className="headerInfo" />
            <BackFromPrinceButton />
            <article>
                <div className="left">
                    <h1>{num} класс</h1>
                    <h2>{`§${par}. ${ruName}`}</h2>
                    <PrincePortrait url={url} alt={name} class="infoPrince" coordinates={0} uniqueId={name} />
                </div>
                <div className="right right-info">
                    <div className="infoText-info info">
                        <div className="textAll">
                              {renderText()}
                        </div>
                    </div>
                    <div className="map">
                        <img src={articleImg} alt={name} />
                    </div>
                </div>
            </article>
            <img src={image} alt="footer" className="footer" />
        </div>
    );
}
