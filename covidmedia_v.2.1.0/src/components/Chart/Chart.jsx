import React, { useState, useEffect } from 'react';
import { FetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


const Chart = ({ data: {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active },
     country,isDaily }) => {
    const [daily, setDaily] = useState([]);
    const [isDaily1, setIsDaily1] = useState(false)
    useEffect(() => {
        const fetchAPI = async () => {
            setDaily(await FetchDailyData());
        }
        fetchAPI();
    }, []);
    const { t } = useTranslation();
    let confirmedChart;
    let date;
    let deathsChart;
    var repit = false;

    // daily.map(i => {
    //     date = new Date(i.updated).toLocaleDateString()
    //     let dateChart = new Date(i.dateChart).toLocaleDateString()
    //     confirmedChart = i.cases;
    //     deathsChart=i.deaths;

    //     dateChart == date ?
    //         repit = true
    //     : console.log();
        
    // })


    if(repit) {
    daily.pop()
    daily.push({confirmedChart : confirmedChart , dateChart : date , deathsChart : deathsChart})
    }
    else{
    daily.push({confirmedChart : confirmedChart , dateChart : date , deathsChart : deathsChart})
}

    const lineChart = (
        daily.length ?

            (
            
                <div style={{ width: '100%' }}>
                    <div style={ {display: 'flex', alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => setIsDaily1(false)} role="tab"
                        aria-controls="pills-home" aria-selected="true">{t('Bar Graph.1')} <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-line-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <rect width="4" height="5" x="1" y="10" rx="1"/>
                        <rect width="4" height="9" x="6" y="6" rx="1"/>
                        <rect width="4" height="14" x="11" y="1" rx="1"/>
                        <path fill-rule="evenodd" d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                      </svg></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => setIsDaily1(true)} role="tab"
                        aria-controls="pills-profile" aria-selected="false">{t('Line Graph.1')}  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-graph-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"/>
                        <path fill-rule="evenodd" d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"/>
                        <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"/>
                      </svg></a>
                    </li>
                    </ul>
                    </div>
                    
                    {isDaily1 ?
                    
                    (
                        <Line
                            data={{
                                labels: daily.map(({ dateChart }) => dateChart),
                                datasets: [{
                                    data: daily.map(({ confirmedChart }) => confirmedChart),
                                    label: t('con.1'),
                                    borderColor: '#3333ff',
                                    fill: true,
                                    pointBorderWidth : 0.1,
                                    borderWidth : 2
                                    
                                }, {
                                    data: daily.map(({ deathsChart }) => deathsChart),
                                    label: t('dea.1'),
                                    // backgroundColor: 'rgb(255,0,0,0.5)',
                                    borderColor: 'red',
                                    fill: true,
                                    pointBorderWidth : 0.1,
                                    borderWidth : 2
                                }],
                            }} />) :
                        <Bar
                            data={
                                {
                                    labels: [t('con.1') , t('rec.1') , t('dea.1'), t('Active.1')],
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
                    }

                </div>
                )
            :  (<b><div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div></b>)

    )

    const lineChartDaily = (
        daily.length ?
            (
                <div style={{ width: '100%' }}>
                    <Bar
                        data={
                            {
                                labels: [t('con.1') , t('rec.1') , t('dea.1')],
                                datasets: [{
                                    label:  t('peo.1'),
                                    backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)'],
                                    data: [todayCases, todayRecovered, todayDeaths]
                                }]
                            }}
                        options={{
                            legend: { display: false },
                            title: { display: true, text: `${country}` },
                        }}
                    />

                </div>)
            :  (<b><div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div></b>)

    )

    const barChart = (
        cases ? (
            <Bar
                data={
                    {
                        labels: [t('con.1') , t('rec.1') , t('dea.1'), t('Active.1') ],
                        datasets: [{
                            label:  t('peo.1'),
                            backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)', 'yellow', 'blue'],
                            data: [cases, recovered, deaths, active ]
                        }]
                    }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `${country}` },
                }}
            />
        ) :  (<b><div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div></b>)
    )


    const barChartDaily = (
        todayCases ? (
            <Bar
                data={
                    {
                        labels: [t('con.1') , t('rec.1') , t('dea.1')],
                        datasets: [{
                            label:  t('peo.1'),
                            backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)'],
                            data: [todayCases, todayRecovered, todayDeaths]
                        }]
                    }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `${country}` },
                }}
            />
        ) : (<b>{t('DailyError.1')}</b>)
    )



    return (
        <div className={styles.container}>
            {
                isDaily ?
                    country ? barChartDaily : lineChartDaily
                    :
                    country ? barChart : lineChart
            }
        </div>
    )
}
export default Chart;
