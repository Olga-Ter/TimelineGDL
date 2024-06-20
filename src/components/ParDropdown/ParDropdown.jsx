import React from "react";
import { useNavigate } from "react-router-dom";
import './ParDropdown.scss';

export function ParDropdown(props) {
    const [open, setOpen] = React.useState(false);
    const navigator = useNavigate();

    function handleOnClick(event) {
        setOpen(!open);
    }

    return props.value === "6 класс" ? (
      <>
        <div className="pardropdown-wrapper">
          <button className="pardropdown-button" onClick={handleOnClick}>{props.value}</button>
          {open && (
            <>
              <a href="#1" className="pardropdown-items">§1</a>
              <a href="#2" className="pardropdown-items">§2</a>
              <a href="#3" className="pardropdown-items">§3, 7-8</a>
              <a href="#4" className="pardropdown-items">§9</a>
            </>
          )}
        </div>
      </>
    ) : props.value === "7 класс" ? (
      <>
        <div className="pardropdown-wrapper">
          <button className="pardropdown-button" onClick={handleOnClick}>{props.value}</button>
          {open && (
            <>
              <a href="#5" className="pardropdown-items">§1-2, 8</a>
            </>
          )}
        </div>
      </>
    ) : props.value === 'Игры' ? (
      <>
        <div className="pardropdown-wrapper">
          <button className="pardropdown-button" onClick={()=>{navigator('/codes')}}>{props.value}</button>
        </div>
      </>
    ) : null
}
