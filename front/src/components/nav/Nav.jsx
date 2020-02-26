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


	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => 
				<li onClick={ () => { setStateInfos(d.mode) } } id={ d.mode } key={ d.mode } style={{opacity: d.mode  ? "1" : "0.5"}}>
					{d.mode}
					{console.log(d.mode)}
				</li> 
				)}
			</ul>
		</nav>
	);
}
   
export default Nav;