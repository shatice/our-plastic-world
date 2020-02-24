import React, {useState} from "react";

/* Styles */
import './nav.scss';
 
const Nav = ({ setStateInfos }) => {

	const dashboard = 
	[
		{
			mode: "Global"
		},
		{
			mode: "Continents"
		},
		{
			mode: "Countries"
		}
	]

	const handleClick = () => {
  }

	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => 
				<li onClick={ () => { setStateInfos(d.mode); handleClick() } } id={ d.mode } key={ d.mode }>{ d.mode }</li> )}
			</ul>
		</nav>
	);
}
   
export default Nav;