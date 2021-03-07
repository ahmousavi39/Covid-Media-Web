import React,{useState} from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Cards = ( props ) => {
    const { t } = useTranslation();
    
    if(!JSON.stringify(props.data.cases)){
        return <b><div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div></b>
    }

    const {isDaily} = props;

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom >{t('con.1')}</Typography>
                        <Typography variant="h5"  ><CountUp start={0} end={
                            isDaily ? ( props.data.todayCases).toString()
                            :
                           (props.data.cases).toString()
                           } 
                           duration={2.5} separator=","  /></Typography>
                        <Typography color="textSecondary" >{new  Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>   
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom>{(t('rec.1'))}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            isDaily ? 
                            (props.data.todayRecovered).toString()
                            :
                            (props.data.recovered).toString()
                            } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom>{t('dea.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            isDaily ?
                            (props.data.todayDeaths).toString()
                            :
                            (props.data.deaths).toString()
                            } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.updated).toDateString()}</Typography>
                       
                    </CardContent>
                </Grid>

                {
                    isDaily ?
                    null :(
                        <>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.active)}>
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom>{t('Active.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.active).toString()
                            } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.updated).toDateString()}</Typography>
                      
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.tests)}>
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom>{t('Tests.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.tests).toString()
                            } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.updated).toDateString()}</Typography>
                       
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.critical)}>
                    <CardContent className={styles.cardphone}  style={{paddingLeft : '0%', paddingRight:'1',paddingTop : '2px' , paddingBottom : '9px'} }>
                        <Typography color="textSecondary" gutterBottom>{t('CriticalCases.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.critical).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new  Date(props.data.updated).toDateString()}</Typography>
                     
                    </CardContent>
                </Grid>
                </>
                    )
}
            </Grid>
                    
        </div>
    )
}
export default Cards;
