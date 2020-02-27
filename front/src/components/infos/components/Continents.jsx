import React from "react";
import { useTranslation } from 'react-i18next';

const Continents = ( {continentList} ) => {
	const { t } = useTranslation();

	return(
		<section className="infos__bloc infos__bloc--continents">
      <h2>
				<p>{t('current-year')}</p>
				<p>{t('continents.title')}</p>
			</h2>
			<ol>
        {  continentList.map(c => <li key={c.name}>{c.id}. {c.name}: {c.pollution}% </li> )} 
			</ol>
		</section>
	);
}
export default Continents;