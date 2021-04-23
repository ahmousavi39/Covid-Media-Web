import React, { useState, useEffect } from 'react';
import { FetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';



const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [daily, setDaily] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDaily(await FetchDailyData());
        }
        fetchAPI();
    }, []);






    const lineChart = (
        daily.length ?
            (<Line
                data={{
                    labels: daily.map(({ date }) => date),
                    datasets: [{
                        data: daily.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: daily.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        backgroundColor: 'rgb(255,0,0,0.5)',
                        borderColor: 'red',
                        fill: true,
                    }],
                }} />)
            : null
    )



        

    const barChart = (
        confirmed ? (
            <Bar
                data={
                    {
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgba(255, 0,0,0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}`},
                }}
            />
        ) : null
    )



    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}
export default Chart;
