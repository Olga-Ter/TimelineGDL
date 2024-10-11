import React from "react";
import './PrincePortrait.scss';
import { useNavigate } from "react-router-dom";

export function PrincePortrait(props) {
    const navigate = useNavigate();
    
    function handleOnClick() {
        if(props.name.toLowerCase() !== 'shvarn' && props.name.toLowerCase() !== 'troyden' && props.name.toLowerCase() !== 'dovomont' && props.name.toLowerCase() !== 'budikid' && props.name.toLowerCase() !== 'budivid') {
            navigate(`/info/${props.name.toLowerCase()}`, {
                state: {
                    ruName: props.ruName,
                    name: props.name,
                    url: props.url,
                    num: props.num,
                    articleImg: props.articleImg,
                    par: props.par
                }
            });
        }
    }

    return (
        <div className="prince-portrait-container">
            <img 
                src={props.url} 
                alt={props.alt} 
                className={`prince-portrait ${props.class}`} 
                id={props.uniqueId} 
                style={{top: `${props.coordinates}px`}} 
                onClick={handleOnClick}
            />
        </div>
    );
}
