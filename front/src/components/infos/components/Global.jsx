import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Global = ({ infosContent }) => {
  const { t } = useTranslation();
  let eiffelWeight = 7300; 

  return (
    <div>
      <section className="infos__bloc infos__bloc--production">
        <ul>
          <li className="global__title">
            <span className="data">{infosContent.totalProduction}</span> {t('global.data-prod-mesure')}
            <p>{t('global.data-prod-desc')}</p>
          </li>
          <div className="global__subtitle">
            <li><strong>3x</strong> {t('global.data-prod-calcul-1')} {infosContent.year}</li>
            <li><strong>7x</strong> {t('global.data-prod-calcul-2')}</li>
          </div>

        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <ul>
          <li className="global__data">
            <span className="data">{infosContent.recycled}%</span>
            <p className="data__text">{t('global.data-recycled-desc')}</p>
          </li>
          <li className="global__data--two">
            <span className="data">{infosContent.discarded}%</span>
            <p className="data__text">{t('global.data-discarded-desc')}</p>
          </li>
          <li>
            <p className="intro__equivalence">{t('global.equivalence-intro')}</p>
            <p className="data">{((infosContent.totalProduction * (infosContent.discarded / 100)) / eiffelWeight)}</p>
            <p className="intro__equivalence">{t('global.equivalence-desc')}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
   
export default Global;