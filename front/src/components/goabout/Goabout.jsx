import React from "react";
import './goabout.scss';

const Goabout = ({setIsDisplayAbout, isDisplayAbout}) => {
    return (
        <p 
            onClick={() => {isDisplayAbout ? setIsDisplayAbout(false) : setIsDisplayAbout(true)}} className="first__title">Our plastic world<svg className="arrowIcon"><use xlinkHref="/sprite-sheet.svg#arrowIcon" /></svg>
        </p>
    )
}
export default Goabout;