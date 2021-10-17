import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

const Cards = (props) => {
    const { t } = useTranslation();

    if (!JSON.stringify(props.data.cases)) {
        return <b><div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div></b>
    }

    const { isDaily } = props;
    const { vaccineData } = props;

    return (
        <div className={styles.container}>

            <Grid container spacing={3} style={{marginBottom: 15}} justifyContent="center">
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.vaccine)}>
                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>{t('Vaccine.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            isDaily ?
                                vaccineData.todayCases.cases
                                :
                                vaccineData.allCases.cases
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{vaccineData.todayCases.cases !== 0 && isDaily ? 'Congratulations!' : vaccineData.allCases.cases !== 0 && !isDaily ? t('Vaccine.2') : t('Vaccine.3')}</Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom >{t('con.1')}</Typography>
                        <Typography variant="h5"  ><CountUp start={0} end={
                            isDaily ? (props.data.todayCases)
                                :
                                (props.data.cases)
                        }
                            duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary" >{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>{(t('rec.1'))}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            isDaily ?
                                (props.data.todayRecovered)
                                :
                                (props.data.recovered)
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>{t('dea.1')}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            isDaily ?
                                (props.data.todayDeaths)
                                :
                                (props.data.deaths)
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                {
                    isDaily ?
                        null : (
                            <>
                                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.active)}>
                                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                                        <Typography color="textSecondary" gutterBottom>{t('Active.1')}</Typography>
                                        <Typography variant="h5"><CountUp start={0} end={
                                            (props.data.active)
                                        } duration={2.5} separator="," /></Typography>
                                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

                                    </CardContent>
                                </Grid>
                                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.tests)}>
                                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                                        <Typography color="textSecondary" gutterBottom>{t('Tests.1')}</Typography>
                                        <Typography variant="h5"><CountUp start={0} end={
                                            (props.data.tests)
                                        } duration={2.5} separator="," /></Typography>
                                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

                                    </CardContent>
                                </Grid>
                                <Grid item component={Card} xc={12} md={3} className={cx(styles.card, styles.critical)}>
                                    <CardContent className={styles.cardphone} style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                                        <Typography color="textSecondary" gutterBottom>{t('CriticalCases.1')}</Typography>
                                        <Typography variant="h5"><CountUp start={0} end={
                                            (props.data.critical)
                                        } duration={2.5} separator="," /></Typography>
                                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

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
