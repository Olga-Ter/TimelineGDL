import React from "react";
import './ClassDropdown.scss';
import '../ParDropdown/ParDropdown.scss';

export function ClassDropdown(props) {
    const [open, setOpen] = React.useState(false);

    function handleOnClick(event) {
        setOpen(!open);
    }

    return (
        <div className="dropdown-wrapper">
            <button className="dropdown-button" onClick={handleOnClick}></button>
            {open && (
                <div className="dropdown-items">
                    {props.children}
                </div>
            )}
        </div>
    );
}
