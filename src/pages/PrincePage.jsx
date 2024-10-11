import React from "react";
import { Flag } from "../components/Flag/Flag";
import { ClassDropdown } from "../components/ClassDropdown/ClassDropdown";
import { ParDropdown } from "../components/ParDropdown/ParDropdown";
import { Princes } from "../components/Princes/Princes";
import { Pictures } from "../components/Pictures/Pictures";
import { Check } from "../components/Check/Check";
import { Header } from "../components/Header/Header";
import { BackButton } from "../components/BackButton/BackButton";
import firstCheck from "../assets/firstCheck.png"
import secCheck from "../assets/secCheck.png"
import thirdCheck from "../assets/thirdCheck.png"
import fourthCheck from "../assets/fourthCheck.png"
import fifthCheck from "../assets/fifthCheck.png"
import { CopyRight } from "../components/CopyRight/CopyRight";

import { useState, useEffect } from 'react';

export function PrincePage() {
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
        <div className='app'>
            <div className='app-wrapper'>
                <Header></Header>
                <BackButton></BackButton>
                <Flag id="1" number={1} top={isSmallScreen ? -100 : -325}></Flag>
                <Flag id="2" number={2} top={isSmallScreen ? 1950 : 7400-225}></Flag>
                <Flag id="3" number={"3, 7-8"} top={isSmallScreen ? 2580 : 9850-225}></Flag>
                <Flag id="4" number={9} top={isSmallScreen ? 3200 : 12300-225}></Flag>
                <Flag id="5" number={"1-2, 8"} top={isSmallScreen ? 3860 : 14900-225}></Flag>
                <ClassDropdown>
                    <ParDropdown value={'6 класс'}></ParDropdown>
                    <ParDropdown value={'7 класс'}></ParDropdown>
                    <ParDropdown value={'Игры'}></ParDropdown>
                </ClassDropdown>
                <Princes>
                </Princes>
                <Pictures></Pictures>
                <Check top={isSmallScreen ? 2420-200 : 8000-200} img={firstCheck} text={'ВКЛ в XIII-XIV вв.'} link={'https://learningapps.org/view3163944'}></Check>
                <Check top={isSmallScreen ? 3200-260 : 10550-150} img={secCheck} text={'Правление великих князей ВКЛ'} link={'https://learningapps.org/watch?v=psdor5xdc23'}></Check>
                <Check top={isSmallScreen ? 3800-150 : 13100-150} img={thirdCheck} text={'Укрепление великокняжеской власти'} link={'https://learningapps.org/view10657437'}></Check>
                <Check top={isSmallScreen ? 4520-150 : 15750-150} img={fourthCheck} text={'ВКЛ (пазл)'} link={'https://learningapps.org/view2317588'}></Check>
                <Check top={isSmallScreen ? 5220-200 : 18400-200} img={fifthCheck} text={'Правители ВКЛ сер. XIII- к. XIV вв.'} link={'https://learningapps.org/view29425106'}></Check>
                <CopyRight></CopyRight>
            </div>
        </div>
        </>
    )
}