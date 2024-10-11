import React from "react";
import './Flag.scss'

export function Flag(props) {
  return <div className="flag" id={props.id} style={{top: `${props.top}px`}}>{'§' + props.number}</div>;
}