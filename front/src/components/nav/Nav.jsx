import React, {useState} from "react";

/* Styles */
import './nav.scss';
 
const Nav = ({ setStateInfos }) => {

	const [elementDashboard, setElementDashboard] = useState();

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
			<ul className="nav__items">
				{ dashboard.map((d, index) => 
				<li 
					onClick={ () => { 
						setStateInfos(d.mode); 
						setElementDashboard(index)
					}} 
					style={
						elementDashboard === index ? {opacity: 1} : {opacity: 0.5}
					}
					key={index}>
					{d.mode}
				</li> 
				)}
			</ul>
		</nav>
	);
}
   
export default Nav;