import React from "react";


export default function NavBar({ nextClick, backClick }) {


    return (
        <nav className="nav-bar">
            <button onClick={backClick} className="nav-button card-border">Left</button>
            <button onClick={nextClick} className="nav-button card-border">Right</button>
        </nav>
    )
}