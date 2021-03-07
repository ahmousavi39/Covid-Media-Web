import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { useTranslation } from 'react-i18next';
import CanvasJSReact from '../../canvasjs-stock-1.2.10/canvasjs.stock.react';

var CanvasJS = CanvasJSReact.CanvasJS;
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
        <ul style={{marginTop: 20}}>
          <li>{t('ChartType.1')}</li>
        </ul>
      </>
    ) : (<b></b>)
  );
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
    country, isDaily }
) {

  const { t } = useTranslation();

  const barChart = (
    cases ? (
      <>
        <Bar
          data={
            {
              labels: [t('con.1'), t('rec.1'), t('dea.1'), t('Active.1')],
              datasets: [{
                label: t('peo.1'),
                backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)', 'yellow', 'blue'],
                data: [cases, recovered, deaths, active]
              }]
            }}
          options={{
            legend: { display: false },
            title: { display: true, text: `${country}` },
          }}
        />
        <ul style={{marginTop: 20}}>
          <li>{t('ChartType.2')}</li>
        </ul>
      </>
    ) : (<b><div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div></b>)
  )


  const barChartDaily = (
    todayCases ? (
      <>
        <Bar
          data={
            {
              labels: [t('con.1'), t('rec.1'), t('dea.1')],
              datasets: [{
                label: t('peo.1'),
                backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)'],
                data: [todayCases, todayRecovered, todayDeaths]
              }]
            }}
          options={{
            legend: { display: false },
            title: { display: true, text: `${country}` },
          }}
        />
        <ul style={{marginTop: 20}}>
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


