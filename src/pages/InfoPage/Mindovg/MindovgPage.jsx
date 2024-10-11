import React from "react";
import './MindovgPage.scss'
import image from '../../../assets/gold.svg'
import { PrincePortrait } from "../../../components/PrincePortrait/PrincePortrait";
import Mindovg from "../../../assets/Mindovg.svg"
import Crowning from "../../../assets/Корнация Миндовга 1.svg"
import map from "../../../assets/Карта ВКЛ при Миндовге 1.svg"
import { BackFromPrinceButton } from "../../../components/BackFromPrinceButton/BackFromPrinceButton";
import { useEffect, useState } from "react";

export function MindovgPage() {
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
  <>
    <div className="info-page">
      <img src={image} alt="header" className="headerInfo"/>
      <BackFromPrinceButton></BackFromPrinceButton>
      {!isSmallScreen ?(<article>
        <div className="left">
          <h1>6 класс</h1>
          <h2>§1.Миндовг</h2>
          <PrincePortrait url={Mindovg} alt="mindovg" class="infoPrince" coordinates={0} uniqueId={'mindovg'}/>
        </div>
        <div className="right">
          <div className="infoText">
            <div className="crown ">
             <img src={Crowning} alt="" />
            </div>
            <div className="text">
              <div className="textWrapper">
                <p>
                  <b>Князь Миндовг (1195 - 1263)</b> – основатель ветви литовских
                  князей, первый король на белорусских землях.
                  Впервые Миндовг упоминается в летописях в <b>1219 г.,</b> когда
                  было заключено перемирие между Литвой и Волынью. К <b>1248 г.</b>
                  на белорусских землях Миндовг формирует государство во
                  главе с центром в Новогрудке. Княжество включало в себя
                  такие белорусские города как Волковыск, Слоним, Здитов и др. <br />
                  В <b>1251 г.</b> Миндовг и его жена Марта приняли католическую веру.
                  Тогда Папа Римский признал Литву католическим государством,
                  и 1253 г. по его поручению прошла коронация Миндовга. <br />
                  <b>Крещение Миндовга</b> обеспечивало княжеству мир с Ливонским
                  орденом, и на десятилетие Литва вошла в политическую систему
                  католической Европы. Но примерно в 1261 г. Миндовг отрекся от
                  веры и снова стал бороться с орденом. В <b>1263 г.</b> Миндовг и два
                  его малолетних сына были убиты в результате заговора приближенных к правителю князей.
                </p>         
              </div>
            </div>
          </div>
          <div className="map">
            <img src={map} alt=""/>
          </div>
        </div>
      </article>) : 
      (<article>
        <div className="left">
          <h1>6 класс</h1>
          <h2>§1.Миндовг</h2>
          <PrincePortrait url={Mindovg} alt="mindovg" class="infoPrince" coordinates={0} uniqueId={'mindovg'}/>
        </div>
        <div className="right">
          <div className="infoText">
            <div className="text">
              <div className="textWrapper">
                <p>
                  <b>Князь Миндовг (1195 - 1263)</b> – основатель ветви литовских
                  князей, первый король на белорусских землях.
                  Впервые Миндовг упоминается в летописях в <b>1219 г.,</b> когда
                  было заключено перемирие между Литвой и Волынью. К <b>1248 г.</b>
                  на белорусских землях Миндовг формирует государство во
                  главе с центром в Новогрудке. Княжество включало в себя
                  такие белорусские города как Волковыск, Слоним, Здитов и др. <br />
                  В <b>1251 г.</b> Миндовг и его жена Марта приняли католическую веру.
                  Тогда Папа Римский признал Литву католическим государством,
                  и 1253 г. по его поручению прошла коронация Миндовга. <br />
                  <b>Крещение Миндовга</b> обеспечивало княжеству мир с Ливонским
                  орденом, и на десятилетие Литва вошла в политическую систему
                  католической Европы. Но примерно в 1261 г. Миндовг отрекся от
                  веры и снова стал бороться с орденом. В <b>1263 г.</b> Миндовг и два
                  его малолетних сына были убиты в результате заговора приближенных к правителю князей.
                </p>         
              </div>
            </div>
          </div>
          <div className="mapWrapper">
            <div className="crown ">
              <img src={Crowning} alt="" />
            </div>
            <div className="map">
              <img src={map} alt=""/>
            </div>
          </div>
        </div>
      </article>
      )
      }
      <img src={image} alt="footer" className="footer"/>
    </div>
  </>

);
}