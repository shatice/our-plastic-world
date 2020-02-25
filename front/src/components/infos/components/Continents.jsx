import React from "react";
import { useTranslation } from 'react-i18next';

const Continents = ( continentList ) => {
  const { t } = useTranslation();

	return(
		<section className="infos__bloc infos__bloc--continents">
      <h1>{t('continents.title')}</h1>
			<ol>
        {/* { continentList.map(c => <li key={c.name}>{c.name}</li> )} */}
			</ol>
		</section>
	);
}
   
export default Continents;