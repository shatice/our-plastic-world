import React, { useEffect } from "react";
import "../timeline/timeline.scss";

import API from "../../services/Api";

/* Globe library */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Scrollbar = ({ setInfosContent }) => {
  useEffect(() => {
    let selectedDates = [];
    const $API = new API();

    am4core.useTheme(am4themes_animated);

    let startYear = 1980;
    let endYear = 2015;
    let currentYear = 1995;

    let chart = am4core.create("scrollbar", am4charts.RadarChart);

    let yearLabel = chart.radarContainer.createChild(am4core.Label);

    yearLabel.horizontalCenter = "middle";
    yearLabel.verticalCenter = "top";
    yearLabel.fill = am4core.color("#fff");
    yearLabel.fontSize = 30;
    yearLabel.text = String(currentYear);

    // year slider IMPORTANT
    let yearSliderContainer = chart.createChild(am4core.Container);
    yearSliderContainer.layout = "vertical";
    yearSliderContainer.padding(0, 38, 0, 38);
    yearSliderContainer.width = am4core.percent(100);

    // IMPORTANT
    let yearSlider = yearSliderContainer.createChild(am4core.Slider);
    yearSlider.events.on("rangechanged", function() {
      updateRadarData(
        startYear + Math.round(yearSlider.start * (endYear - startYear))
      );
    });
    yearSlider.orientation = "horizontal";
    yearSlider.start = 0; // placement du curseur ?
    yearSlider.exportable = false;

    // IMPORTANT
    function updateRadarData(year) {
      if (currentYear !== year) {
        currentYear = year;
        yearLabel.text = String(currentYear);

        if (!selectedDates.find(x => x.year === currentYear)) {
          $API.getInfoByYear(currentYear).then(res => {
            selectedDates.push(res.data);
            setInfosContent(res.data);
          });
        } else {
          setInfosContent(selectedDates.find(x => x.year === currentYear));
        }
      }
    }
  }, [setInfosContent]);

  return <div id="scrollbar" className="scrollbar"></div>;
};

export default Scrollbar;
