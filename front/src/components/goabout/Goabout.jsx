import React from "react";

/***** STYLE *****/
import './goabout.scss';

const Goabout = ({setIsDisplayAbout, isDisplayAbout}) => {
	return (
		<aside className="goAbout">
			<h2 onClick={() => { isDisplayAbout ? setIsDisplayAbout(false) : setIsDisplayAbout(true) }}>Our Plastic World</h2>
			<svg className="arrowIcon"><use xlinkHref="/sprite-sheet.svg#arrowIcon"/></svg>
		</aside>
	)
}
export default Goabout;