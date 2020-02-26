import React, { useState } from "react";
import views from "../../js/models/views.js";
import { useTranslation } from 'react-i18next';
import './nav.scss';
 
const Nav = ({ setStateInfos }) => {
	const { t } = useTranslation();

	const [elementDashboard, setElementDashboard] = useState();

	const dashboard = 
	[
		{
			mode: views.Global, 
			label: t('nav.1')
		},
		{
			mode: views.Continents, 
			label: t('nav.2')
		},
		{
			mode: views.Countries,
			label: t('nav.3')
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