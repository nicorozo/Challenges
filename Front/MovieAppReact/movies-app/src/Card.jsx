import React from "react";

export default function Card({ sayayin }) {

    return (
        <ul className="card-border card-column">
            <img className="card-border picture" src={sayayin.imageLink} alt={sayayin.imageName}></img>
            <h2>{sayayin.imageName}</h2>
            <p><b>{sayayin.quote}</b></p>
        </ul>

    )
}

