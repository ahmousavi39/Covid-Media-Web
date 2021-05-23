import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Line, HorizontalBar } from '@reactchartjs/react-chart.js'
import styles from './Chart.module.css';
import { useTranslation } from 'react-i18next';
import CanvasJSReact from '../../canvasjs-stock-1.2.10/canvasjs.stock.react';
// import ChartRace from 'react-chart-race';
import * as d3 from 'd3';


var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export function HistoricalData(props) {
  const { t } = useTranslation();

  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var firstMonth = month - 1;

  var dateStr = year + "-" + month + "-" + date;

  var firstDateStr = year + "-" + firstMonth + "-" + date;

  const options = {
    theme: "light2",
    charts: [{
      axisX: {
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "MMM DD YYYY"
        }
      },
      toolTip: {
        shared: true
      },

      data: [{
        name: t('con.1'),
        type: "splineArea",
        color: "rgba(0, 0, 255, 0.5)",
        yValueFormatString: "##,###.##",
        xValueFormatString: "MMM DD YYYY",
        dataPoints: props.data[0]
      },
      {
        name: t('dea.1'),
        type: "splineArea",
        color: "rgb(255, 3, 3)",
        yValueFormatString: "##,###.##",
        xValueFormatString: "MMM DD YYYY",
        dataPoints: props.data[1]
      },
      {
        name: t('rec.1'),
        type: "splineArea",
        color: "rgba(0, 255, 0, 0.5)",
        yValueFormatString: "##,###.##",
        xValueFormatString: "MMM DD YYYY",
        dataPoints: props.data[2]
      }
      ]
    }],
    navigator: {
      slider: {
        minimum: new Date(firstDateStr),
        maximum: new Date(dateStr)
      }
    }
  };

  let containerProps;
  if (window.innerWidth < 450) {
    containerProps = {
      width: "100%",
      height: "250px"
    };
  } else {
    containerProps = {
      width: "100%",
      height: "300px",
      margin: "auto"
    };
  }
  return (
    props.data[0] && props.data[1] && props.data[2] ? (
      <>
        <div className={styles.container}>
          {
            <CanvasJSStockChart containerProps={containerProps} options={options}
            />
          }
        </div>
        <ul style={{ marginTop: 20 }}>
          <li>{t('ChartType.1')}</li>
        </ul>
      </>
    ) : ((<b><div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div></b>))
  );
}


export function HistoricalVaccine(props) {
  const { t } = useTranslation();

  const data = {
    labels: props.vaccineData[1],
    datasets: [
      {
        label: t('Vaccine.1'),
        data: props.vaccineData[0],
        fill: false,
        backgroundColor: 'pink',
        borderColor: 'rgba(146, 144, 144, 0.219)',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    props.vaccineData[0] !== undefined ?
      (<>
        <div className={styles.container}>
          <Line data={data} options={options} />
        </div>
        <ul style={{ marginTop: 20 }}>
          <li>{t('ChartType.1')}</li>
        </ul>
      </>) :
      (<b></b>)
  )
}


export function Chart(
  { data: {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active },
    country, isDaily, vaccineData }
) {

  const { t } = useTranslation();

  const barChart = (
    cases ? (
      <>
        <Bar
          data={
            {
              labels: [t('con.1'), t('rec.1'), t('Vaccine.1'), t('dea.1'), t('Active.1')],
              datasets: [{
                label: t('peo.1'),
                backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgba(146, 144, 144, 0.219)', 'rgb(255, 3, 3)', 'yellow', 'blue'],
                data: [cases, recovered, vaccineData.allCases.cases, deaths, active]
              }]
            }}
          options={{
            legend: { display: false },
            title: { display: true, text: `${country}` },
          }}
        />
        <ul style={{ marginTop: 20 }}>
          <li>{t('ChartType.2')}</li>
        </ul>
      </>
    ) : (<div className="spinner-border" style={{ marginRight: 'auto', marginLeft: 'auto' }} role="status">
      <b><span className="sr-only"></span></b>
    </div>)
  )


  const barChartDaily = (
    todayCases ? (
      <>
        <Bar
          data={
            {
              labels: [t('con.1'), t('rec.1'), t('Vaccine.1'), t('dea.1')],
              datasets: [{
                label: t('peo.1'),
                backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgba(146, 144, 144, 0.219)', 'rgb(255, 3, 3)'],
                data: [todayCases, todayRecovered, vaccineData.todayCases.cases, todayDeaths]
              }]
            }}
          options={{
            legend: { display: false },
            title: { display: true, text: `${country}` },
          }}
        />
        <ul style={{ marginTop: 20 }}>
          <li>{t('ChartType.2')}</li>
        </ul>
      </>
    ) : (<b>{t('DailyError.1')}</b>)
  )



  return (
    <div className={styles.container}>
      {
        isDaily ? barChartDaily : barChart
      }
    </div>

  )
}


export function VaccineCountries(props) {
  let statics = props.vaccineDataCountries.statics;
  let countries = props.vaccineDataCountries.countries;
  let population = props.vaccineDataCountries.population;
  let percent = props.vaccineDataCountries.percent;

  if (population !== undefined) {
    population.length = 30;
    countries.length = 30;
    statics.length = 30;
    percent.length = 30;
  }
  const data = {
    labels: countries,
    datasets: [
      {
        label: 'Vaccined',
        data: statics,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
      },
      {
        label: 'Population',
        data: population,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
      },
      {
        label: 'Vaccined %',
        data: percent,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
      }
    ],
  };


  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  let containerProps;
  if (window.innerWidth < 450) {
    containerProps = {
      width: "100%",
      height: "300px"
    };
  } else {
    containerProps = {
      width: "100%",
      height: "150px"
    };
  }

  return (
    props.vaccineDataCountries.statics ? (
      <div className={styles.container}>
      <HorizontalBar height={containerProps.height} width={containerProps.width} data={data} options={options} />
      </div>
    ) : ((<div className="spinner-border" style={{ marginRight: 'auto', marginLeft: 'auto' }} role="status">
      <b><span className="sr-only"></span></b>
    </div>))
  )
}


export function RaceChart() {
  let nodeProps = 0;
  fetch('https://api.covid19india.org/states_daily.json')
    .then(res => res.json())
    .then(data => {
      const totalCovidDataState = data.states_daily
      const groupedData = processData(totalCovidDataState);
      plotChart(groupedData, nodeProps)
    })

  async function plotChart(data, nodeProps) {
    const svg = d3.select("#chart");
    let width;
    let height;
    if(typeof nodeProps !== 'number'){
    let node = nodeProps.getBoundingClientRect();
    width = node.width;
    height = node.height;
    }
    const ticker = 500;

    const dateList = Array.from(data.keys())
    const fontSize = 16;
    const rectProperties = { height: 20, padding: 10 }
    const container = svg.append("g")
      .classed("container", true)
      .style("transform", "translateY(25px)")


    const widthScale = d3.scaleLinear()
    const axisTop = svg
      .append('g')
      .classed('axis', true)
      .style("transform", "translate(10px, 20px)")
      .call(d3.axisTop(widthScale))

    const update = (date) => {

      const presentData = processEachDateData(data.get(date).get("Confirmed")[0])
      widthScale.domain([0, d3.max(Object.values(presentData), d => d.value)])
        .range([0, width - fontSize - 50])

      axisTop
        .transition()
        .duration(ticker / 1.2)
        .ease(d3.easeLinear)
        .call(d3.axisTop(widthScale))

      const sortedRange = [...presentData].sort((a, b) => b.value - a.value)

      container
        .selectAll("text")
        .data(presentData)
        .enter()
        .append("text")

      container
        .selectAll("text")
        .text(d => d.key + " " + d.value)
        .transition()
        .delay(500)
        .attr("x", d => widthScale(d.value) + fontSize)
        .attr("y", (d, i) => sortedRange.findIndex(e => e.key === d.key) * (rectProperties.height + rectProperties.padding) + fontSize)

      container
        .selectAll("rect")
        .data(presentData)
        .enter()
        .append("rect")

      container
        .selectAll("rect")
        .attr("x", 10)
        .transition()
        .delay(500)
        .attr("y", (d, i) => sortedRange.findIndex(e => e.key === d.key) * (rectProperties.height + rectProperties.padding))
        .attr("width", d => d.value <= 0 ? 0 : widthScale(d.value))
        .attr("height", 20)

    }
    for (const date of dateList) {
      update(date)
      await new Promise(done => setTimeout(() => done(), ticker));
    }
  }

  function processData(data) {
    return d3.group(data, d => d.date, e => e.status);
  }

  function processEachDateData(data) {
    //remove status and date
    delete data.date
    delete data.status
    delete data.tt // tt is total 

    return Object.keys(data)
      .map(key => ({ key, value: parseInt(data[key]) }))
    // .sort((a,b) => b.value-a.value) 
  }

  return (
    true == true ?
      <svg ref={ node => nodeProps = node } id="chart" style={{width: '180vh', height: '400vh'}}></svg>
      :
      <b>Loading....</b>
  )
}
