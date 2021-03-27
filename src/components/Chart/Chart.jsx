import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Line, HorizontalBar } from '@reactchartjs/react-chart.js'
import styles from './Chart.module.css';
import { useTranslation } from 'react-i18next';
import CanvasJSReact from '../../canvasjs-stock-1.2.10/canvasjs.stock.react';
// import ChartRace from 'react-chart-race';

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
    ) : ((<b><div class="spinner-border" role="status">
      <span class="sr-only"></span>
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
    ) : (<div class="spinner-border" style={{ marginRight: 'auto', marginLeft: 'auto' }} role="status">
      <b><span class="sr-only"></span></b>
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
      <HorizontalBar height={containerProps.height} width={containerProps.width} data={data} options={options} />
    ) : ((<div class="spinner-border" style={{ marginRight: 'auto', marginLeft: 'auto' }} role="status">
      <b><span class="sr-only"></span></b>
    </div>))
  )
}


export function RaceChart() {
  return (
    true == true ? 
    // <ChartRace data={[
    //   { id: 0, title: 'Ayfonkarahisar', value: 42, color: '#50c4fe' },
    //   { id: 1, title: 'Kayseri', value: 38, color: '#3fc42d' },
    //   { id: 2, title: 'Muğla', value: 76, color: '#c33178' },
    //   { id: 3, title: 'Uşak', value: 30, color: '#423bce' },
    //   { id: 4, title: 'Sivas', value: 58, color: '#c8303b' },
    //   { id: 5, title: 'Konya', value: 16, color: '#2c2c2c' },
    //   { id: 0, title: 'Ayfonkarahisar', value: 100, color: '#50c4fe' },
    //   { id: 0, title: 'Ayfonkarahisar', value: 10, color: '#50c4fe' },
    //   { id: 0, title: 'Ayfonkarahisar', value: 500, color: '#50c4fe' },
    // ]} />
    <p> Race Chart will be here </p>
    :
    <b>Loading....</b>
    )
}
