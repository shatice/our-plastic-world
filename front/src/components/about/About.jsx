import React from "react";

/***** STYLE *****/
import './about.scss';

/***** TRANSLATOR *****/
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

	return(
		<div className="about">
			<section className="aboutCoontainer">
				<h2>{t('about.about-title')}</h2>
				<h3>{t('about.about-subtitle')}</h3>
				<p>{t('about.about-desc')}</p>
				<div className="aboutContainer__articles">
					<article>
						<h4>{t('about.evol-title')}</h4>
						<p>{t('about.evol-content-1')}</p>
						<p>{t('about.evol-content-2')}</p>
						<p>{t('about.evol-content-3')}</p>
					</article>
					<article>
						<h4>{t('about.repartition-title')}</h4>
						<p>{t('about.repartition-content-1')}</p>
						<p>{t('about.repartition-content-2')}</p>
					</article>
					<article>
						<h4>{t('about.consequences-title')}</h4>
						<p>{t('about.consequences-content-1')}</p>
						<p>{t('about.consequences-content-2')}</p>
						<p>{t('about.consequences-content-3')}</p>
					</article>
					<article>
						<h4>{t('about.responsability-title')}</h4>
						<p>{t('about.responsability-content-1')}</p>
						<p>{t('about.responsability-content-2')}</p>
					</article>
				</div>
			</section>
			<section className="sourcesContainer">
				<h2>{t('about.sources-title')}</h2>
				<ul>
					<li><a href="https://ourworldindata.org/plastic-pollution" target="_blank" rel="noopener noreferrer">{t('about.sources-content-1')}</a></li>
					<li><a href="https://www.unenvironment.org/interactive/beat-plastic-pollution/" target="_blank" rel="noopener noreferrer">{t('about.sources-content-2')}</a></li>
				</ul>
			</section>
		</div>
	)
}
export default About;