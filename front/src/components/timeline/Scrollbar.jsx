import React, {useEffect} from "react";
import '../timeline/timeline.scss'; 

import API from '../../services/Api';

/* Globe library */
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import { cos } from "@amcharts/amcharts4/.internal/core/utils/Math";
 
const Scrollbar = ( {setInfosContent} ) => {
	
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
    yearLabel.verticalCenter = "middle";
    yearLabel.fill = am4core.color("#673AB7");
    yearLabel.fontSize = 30;
    // yearLabel.text = String(currentYear);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    
    // year slider IMPORTANT
    let yearSliderContainer = chart.createChild(am4core.Container);
    yearSliderContainer.layout = "vertical";
    yearSliderContainer.padding(0, 38, 0, 38);
    yearSliderContainer.width = am4core.percent(100);
    
    // IMPORTANT
    let yearSlider = yearSliderContainer.createChild(am4core.Slider);
    yearSlider.events.on("rangechanged", function () {
      updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
    })
    yearSlider.orientation = "horizontal";
    yearSlider.start = 0.5; // placement du curseur ? 
    yearSlider.exportable = false;

    console.log(yearSlider.thumb);

    // IMPORTANT
    function updateRadarData(year) {
      if (currentYear != year) {
        currentYear = year;
        // yearLabel.text = String(currentYear);
        console.log(currentYear);

      
        if (!selectedDates.find( x => x.year === currentYear)) {
          
          $API.getInfoByYear(currentYear)
          .then((res)=>{
            selectedDates.push(res.data)
            setInfosContent(res.data);
          })
        } else {
          setInfosContent(selectedDates.find( x => x.year === currentYear));
        }

      }
    }
		
	}, [])
	
	return(
		<div id="scrollbar" className="scrollbar"></div>
	);
}
   
export default Scrollbar;