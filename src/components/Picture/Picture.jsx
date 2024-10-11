import React from "react";
import './Picture.scss'

export function Picture(props) {
  return (
    <div>
      <img src={props.url} alt={props.alt} className={props.class} id={props.uniqueId} style={{top: `${props.coordinates}px`}}/>
    </div>
  )
}