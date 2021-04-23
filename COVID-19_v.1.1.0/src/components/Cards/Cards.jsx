import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ( props ) => {
    if(!JSON.stringify(props.data.confirmed)){
        return 'Loading ...'
    }

    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{(props.con.con).toString()}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={( props.data.confirmed.value).toString()} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.lastUpdate).toDateString()}></Typography>
                        {/* <Typography variprops.ant="body2">Number of JSON.stringify( props.data.confirmed cases of COVID-19</Typography> */}
                        {/* <Typography variant="body2">{(props.con.con).toString()}</Typography> */}
                    </CardContent>   
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{(props.con.rec).toString()}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={(props.data.recovered.value).toString()} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        {/* <Typography variant="body2">Number of recoveries from COVID-19</Typography> */}
                        {/* <Typography variant="body2">{(props.con.rec).toString()}</Typography> */}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{(props.con.dea).toString()}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={(props.data.deaths.value).toString()} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.lastUpdate).toDateString()}</Typography>
                        {/* <Typography variant="body2">Number of JSON.stringify( props.data.deaths caused by COVID-19</Typography> */}
                        {/* <Typography variant="body2">{(props.con.dea).toString()}</Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;
