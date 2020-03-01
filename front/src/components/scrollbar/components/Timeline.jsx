import React, { useEffect } from "react";

/***** STYLE *****/
import "../scrollbar.scss";

/***** DATA CALLS *****/
import API from "../../../services/Api";

/***** LIBRARY - https://www.amcharts.com/ *****/
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Timeline = ({ setInfosContent }) => {
  useEffect(() => {
    let selectedDates = [];
    const $API = new API();

    am4core.useTheme(am4themes_animated);

    let startYear = 1980;
    let endYear = 2015;
    let currentYear = 1995;

    let chart = am4core.create("chart_timeline", am4charts.RadarChart);

    let yearLabel = chart.radarContainer.createChild(am4core.Label);

    yearLabel.horizontalCenter = "middle";
    yearLabel.verticalCenter = "top";
    yearLabel.fill = am4core.color("#fff");
    yearLabel.fontSize = 30;
    yearLabel.text = String(currentYear);

    let yearSliderContainer = chart.createChild(am4core.Container);
    yearSliderContainer.layout = "vertical";
    yearSliderContainer.padding(0, 38, 0, 38);
    yearSliderContainer.width = am4core.percent(100);

    let yearSlider = yearSliderContainer.createChild(am4core.Slider);
    yearSlider.events.on("rangechanged", function() {
      updateRadarData(
        startYear + Math.round(yearSlider.start * (endYear - startYear))
      );
    });
    
    yearSlider.orientation = "horizontal";
    yearSlider.start = 0;
    yearSlider.exportable = false;

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

  return <div id="chart_timeline" className="timeline"></div>;
};

export default Timeline;
