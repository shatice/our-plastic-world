import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import API from "../../../services/Api";

const Global = ({ infosContent }) => {
  const { t } = useTranslation();
  const $API = new API();
  let eiffelWeight = 7300;

  const [ratio, setRatio] = useState(null);
  const [dateBefore, setDateBefore] = useState(0);

  $API.getInfoByYear(1980).then(res => {
    let firstYear = res.data;
    let ra =
      Number(infosContent.totalProduction) / Number(firstYear.totalProduction);
    setRatio(ra.toFixed(2));
  });

  $API.getInfoByYear(infosContent.year - 1).then(res => {
    if (res.data.totalProduction) {
      let ra =
        Number(infosContent.totalProduction) / Number(res.data.totalProduction);
      setDateBefore(ra.toFixed(4));
      console.log("res", res.data.totalProduction);
    } else {
      setDateBefore(0);
    }
  });

  useEffect(() => {}, []);
  return (
    <div>
      <section className="infos__bloc infos__bloc--production">
        <ul>
          <li className="global__title">
            <span className="data">
              {infosContent.totalProduction / 10 ** 6}
            </span>{" "}
            {t("global.data-prod-mesure")}
            <p>{t("global.data-prod-desc")}</p>
          </li>
          <div className="global__subtitle">
            <li>
              <strong>{ratio}x</strong> {t("global.data-prod-calcul-1")}{" "}
              {infosContent.year}
            </li>
            <li>
              <strong>{dateBefore}x</strong> {t("global.data-prod-calcul-2")}
            </li>
          </div>
        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <ul>
          <li className="global__data">
            <span className="data">{infosContent.recycled}%</span>
            <p className="data__text">{t("global.data-recycled-desc")}</p>
          </li>
          <li className="global__data--two">
            <span className="data">{infosContent.discarded}%</span>
            <p className="data__text">{t("global.data-discarded-desc")}</p>
          </li>
          <li>
            <p className="intro__equivalence">
              {t("global.equivalence-intro")}
            </p>
            <p className="data">
              {" "}
              {Math.round(
                (infosContent.totalProduction *
                  (infosContent.discarded / 100)) /
                  eiffelWeight
              )}
            </p>
            <p className="intro__equivalence">{t("global.equivalence-desc")}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Global;
