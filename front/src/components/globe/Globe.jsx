import React, { useEffect } from "react";

/***** STYLE *****/
import "./globe.scss";

/***** MODELS *****/
import views from "../../js/models/views";

/***** LIBRARY - https://www.amcharts.com/ *****/
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const Globe = ({
  countryList,
  setSelectedCountry,
  stateInfos,
  continentList,
  setSearchTerm,
  setColor
}) => {
  
  useEffect(() => {

    // Apply Theme
    am4core.useTheme(am4themes_animated);

    // Set chart
    let chart = am4core.create("chart_globe", am4maps.MapChart);

    // Set definition
    try {
      chart.geodata = am4geodata_worldLow;
    } 
    catch (e) {
      chart.raiseCriticalError(
        new Error(
          'Map geodata could not be loaded. Please download the latest <a href="https://www.amcharts.com/download/download-v4/">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'
        )
      );
    }

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();

    // Set drag behaviour
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20, 20, 20, 20);
    chart.adapter.add("deltaLatitude", function(delatLatitude) {
      return am4core.math.fitToRange(delatLatitude, -90, 90);
    });

    // Set global bg
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(
      "#000"
    );
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.deltaLongitude = 20;
    chart.deltaLatitude = -20;

    // Set template shadow
    var shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    try {
      shadowPolygonSeries.geodata = am4geodata_continentsLow;
    } 
    catch (e) {
      shadowPolygonSeries.raiseCriticalError(
        new Error(
          'Map geodata could not be loaded. Please download the latest <a href="https://www.amcharts.com/download/download-v4/">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'
        )
      );
    }

    shadowPolygonSeries.useGeodata = false;
    shadowPolygonSeries.dx = 8;
    shadowPolygonSeries.dy = 2;
    shadowPolygonSeries.mapPolygons.template.fill = am4core.color("#000");
    shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.5;
    shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Load polygon data from GeoJSON (like country names)
    polygonSeries.useGeodata = true;

    // 
    polygonSeries.calculateVisualCenter = true;

    // Set graticules
    let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.fitExtent = false;
    graticuleSeries.mapLines.template.strokeOpacity = 0;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.nonScalingStroke = true;

    // Set default template fill
    polygonTemplate.fill = am4core.color("rgba(22, 22, 22, 0.055)");

    // Set template strokes
    polygonTemplate.stroke = am4core.color("#fff");
    polygonTemplate.strokeOpacity = 1;
    polygonTemplate.strokeWidth = 0.2;

    // INTRO
    if (!stateInfos) {
      // Set rotating animation 
      setTimeout(function(){
        let animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
      })
    }

    // VIEWS CONTINENTS || COUNTRIES
    if (stateInfos !== views.Global) {
      // Set hover behaviour
      var hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#fff");

      // Configure tooltips : country name
      polygonTemplate.tooltipText = "{name}";

      // Set tooltip style
      polygonSeries.tooltip.background.fillOpacity = 0.5;
      polygonSeries.tooltip.background.cornerRadius = 30;
    }

    // VIEW CONTINENTS
    if (stateInfos === views.Continents) {
      let arr = [];

      continentList.forEach((continent, index) => {
        continent.countries.forEach(country => {
          arr.push({
            id: country.code,
            value: index === 0 ? 0 : continent.pollution
          });
        });
        polygonSeries.data = arr;
      });

      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonTemplate,
        min: am4core.color("#59B64A"),
        max: am4core.color("#C00B0B")
      });
    }

    // VIEW COUNTRIES
    if (stateInfos === views.Countries) {

      // Set hit event behaviour => show country data
      polygonTemplate.events.on("hit", function(event) {
        setColor(event.target.dataItem.mapPolygon.fill.rgba);

        if (
          countryList.find(x => x.code === event.target.dataItem.dataContext.id)
        ) {
          setSelectedCountry(
            countryList.find(x => x.code === event.target.dataItem.dataContext.id)
          );
          setSearchTerm(
            countryList.find(x => x.code === event.target.dataItem.dataContext.id)
              .name
          );
        } else {
          setSelectedCountry({
            per_person_per_day: null,
            value: null
          });
        }

      });

      // Set colors gradient form max to min values
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonTemplate,
        min: am4core.color("#C00B0B"),
        max: am4core.color("#59B64A")
      });
      let arr = [];

      countryList.forEach(country => {
        arr.push({
          id: country.code,
          value: 100 - country.value
        });
      });
      polygonSeries.data = arr;
    }

  }, 
  [ stateInfos, 
    continentList, 
    setColor, 
    countryList, 
    setSearchTerm, 
    setSelectedCountry 
  ]);

  return <div id="chart_globe" className="globe"></div>;
};

export default Globe;
