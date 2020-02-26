import React, {} from "react";
import { useTranslation } from 'react-i18next';

/***** COMPONENTS *****/
import Search from './search/Search.jsx';
 
const Countries = ({setStateInfos}) => {
	const { t } = useTranslation();

	return(
    <section className="infos__bloc infos__bloc--countries">
			<h2>
				<p>{t('current-year')}</p>
				<p>{t('countries.title')}</p>
			</h2>
			<Search />
			<i>{t('countries.detail')}</i>
			<ul>
				<li>
					<p className="data"><span>97</span>%</p>
					<p>Déchets plastiques recyclés</p>
				</li>
				<li>
					<p className="data"><span>144</span>kg</p>
					<p>Consommation par personne</p>
				</li>
			</ul>
		</section>
	);
}
   
export default Countries;