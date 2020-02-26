import React, {} from "react";
import { useTranslation } from 'react-i18next';

const Global = ({ infosContent }) => {
  const { t } = useTranslation();
  let eiffelWeight = 7300; 

  return (
    <div>
      <section className="infos__bloc infos__bloc--production">
        <ul>
          <li>
            <span className="data">{infosContent.totalProduction}</span> {t('global.data-prod-mesure')}
            <p>{t('global.data-prod-desc')}</p>
          </li>
          <li><strong>3x</strong> {t('global.data-prod-calcul-1')} {infosContent.year}</li>
          <li><strong>7x</strong> {t('global.data-prod-calcul-2')}</li>
        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <ul>
          <li><span className="data">{infosContent.recycled}%</span> {t('global.data-recycled-desc')}</li>
          <li><span className="data">{infosContent.discarded}%</span> {t('global.data-discarded-desc')}</li>
          <li>
            <p>{t('global.equivalence-intro')}</p>
            <p className="data">{((infosContent.totalProduction * (infosContent.discarded / 100)) / eiffelWeight)}</p>
            <p>{t('global.equivalence-desc')}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
   
export default Global;