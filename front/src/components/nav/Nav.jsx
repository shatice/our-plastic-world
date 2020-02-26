import React, {} from "react";
import views from "../../js/models/views.js";
import { useTranslation } from 'react-i18next';
import './nav.scss';
 
const Nav = ({ setStateInfos }) => {
	const { t } = useTranslation();

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

	const handleClick = () => {
  }

	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => 
				<li onClick={ () => { setStateInfos(d.mode); handleClick() } } id={ d.mode } key={ d.mode }>{ d.label }</li> )}
			</ul>
		</nav>
	);
}
   
export default Nav;