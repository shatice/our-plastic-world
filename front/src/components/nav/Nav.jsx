import React, {useState} from "react";

/* Styles */
import './nav.scss';
 
const Nav = ({ setStateInfos }) => {

	const dashboard = 
	[
		{
			id: 1,
			mode: "Global"
		},
		{
			id: 2,
			mode: "Continents"
		},
		{
			id: 3,
			mode: "Countries"
		}
	]

	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => 
				<li onClick={ () => { setStateInfos(d.mode) } } id={ d.mode } key={ d.id }>{ d.mode }</li> )}
			</ul>
		</nav>
	);
}
   
export default Nav;