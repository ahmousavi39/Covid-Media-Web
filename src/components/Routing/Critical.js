import React, { useState } from 'react';
import styles from './Style.module.css';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Test = () => {
  const { t } = useTranslation();
  return (
    <ol style={{ textAlign: 'left' }}>
      <li className={styles.medium_title}>{t('Symptoms.14')}</li>
      <ul>
        <li>{t('Symptoms.1')}</li>
        <li>{t('Symptoms.2')}</li>
        <li>{t('Symptoms.3')}</li>
      </ul>
      <br />
      <li className={styles.medium_title}>{t('Symptoms.15')}</li>
      <ul>
        <li >{t('Symptoms.4')}</li>
        <li>{t('Symptoms.5')}</li>
        <li>{t('Symptoms.6')}</li>
        <li>{t('Symptoms.7')}</li>
        <li>{t('Symptoms.8')}</li>
        <li>{t('Symptoms.9')}</li>
        <li>{t('Symptoms.10')}</li>
      </ul>
      <br />
      <li className={styles.medium_title}>{t('Symptoms.16')}</li>
      <ul>
        <li>{t('Symptoms.11')}</li>
        <li>{t('Symptoms.12')}</li>
        <li>{t('Symptoms.13')}</li>
      </ul>
      <br />

      <li className={styles.medium_title}>{t('Critical.5')}</li>
      <br />
      <li className={styles.medium_title}>{t('Critical.6')}</li>
      <br />
      <h4><NavLink to='/wiki#testing'>{t('Critical.1')}</NavLink></h4>
   </ol>
  )
}

const Stay_safe = () => {
  const { t } = useTranslation();
  return (
    <div id='stay_safe'>

      <ul style={{ paddingLeft: '0', marginLeft: '0' }}>
        <hr />

        <div>
          <p>{t('If you are sick.What to do.2')} <a href={t('If you are sick.What to do.4')}>{t('If you are sick.What to do.3')}</a>{t('If you are sick.What to do.5')}</p>
          <ul>
            <li>{t('If you are sick.What to do.6')}</li>
            <li><strong>{t('If you are sick.What to do.7')}<a href={t('If you are sick.What to do.9')}>{t('If you are sick.What to do.8')}</a>{t('If you are sick.What to do.10')}</strong>{t('If you are sick.What to do.11')}</li>
          </ul>
          <br />
          <h4>{t('If you are sick.What to do.12')}</h4>
          <br />
          <ol style={{ paddingLeft: '5%' }}>
            <p>{t('If you are sick.What to do.13')}{t('If you are sick.What to do.15')}</p>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.16')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.17')}</strong>{t('If you are sick.What to do.18')}</li>
              <li><strong>{t('If you are sick.What to do.19')}</strong>{t('If you are sick.What to do.20')}</li>
              <li><strong>{t('If you are sick.What to do.21')}</strong>{t('If you are sick.What to do.22')}<a href={t('If you are sick.What to do.24')}>{t('If you are sick.What to do.23')}</a>{t('If you are sick.What to do.25')}<a href={t('If you are sick.What to do.27')}>{t('If you are sick.What to do.26')}</a>{t('If you are sick.What to do.28')}</li>
              <li><strong>{t('If you are sick.What to do.29')}</strong>{t('If you are sick.What to do.30')}</li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.31')}</li>
            <br />
            <p><strong>{t('If you are sick.What to do.32')}</strong>{t('If you are sick.What to do.33')}</p>
            <ul>
              <li>{t('If you are sick.What to do.34')}{t('If you are sick.What to do.35')}{t('If you are sick.What to do.37')}{t('If you are sick.What to do.38')}{t('If you are sick.What to do.40')}</li>
              <li>{t('If you are sick.What to do.41')}{t('If you are sick.What to do.42')}{t('If you are sick.What to do.44')}</li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.45')}</li>
            <br />
            <ul>
              <li><strong><a href={t('If you are sick.What to do.47')}>{t('If you are sick.What to do.46')}</a>{t('If you are sick.What to do.48')}</strong></li>
              <li><strong>{t('If you are sick.What to do.49')}</strong>{t('If you are sick.What to do.50')}</li>
            </ul>
            <br />
            <p style={{ fontWeight: '600' }}>{t('If you are sick.What to do.51')}</p>
            <p>{t('If you are sick.What to do.52')}<strong>{t('If you are sick.What to do.53')}</strong>{t('If you are sick.What to do.54')}<strong>{t('If you are sick.What to do.55')}</strong></p>
            <ul>
              <li>{t('If you are sick.What to do.56')}</li>
              <li>{t('If you are sick.What to do.57')}</li>
              <li>{t('If you are sick.What to do.58')}</li>
              <li>{t('If you are sick.What to do.59')}</li>
              <li>{t('If you are sick.What to do.60')}</li>
            </ul>
            <br />
            <p>{t('If you are sick.What to do.61')}</p>
            <p><strong>{t('If you are sick.What to do.62')}</strong>{t('If you are sick.What to do.63')}</p>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.64')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.65')}</strong>{t('If you are sick.What to do.66')}</li>
              <li><strong>{t('If you are sick.What to do.67')}</strong>{t('If you are sick.What to do.68')}</li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.69')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.70')}<a href={t('If you are sick.What to do.72')}>{t('If you are sick.What to do.71')}</a>{t('If you are sick.What to do.73')}</strong>{t('If you are sick.What to do.74')}</li>
              <li>{t('If you are sick.What to do.75')}</li>
              <li>{t('If you are sick.What to do.76')}</li>
            </ul>
            <br />
            <p><strong>{t('If you are sick.What to do.77')}</strong>{t('If you are sick.What to do.78')}</p>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.79')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.80')}</strong>{t('If you are sick.What to do.81')}</li>
              <li><strong>{t('If you are sick.What to do.82')}</strong>{t('If you are sick.What to do.83')}</li>
              <li><strong>{t('If you are sick.What to do.84')}</strong>{t('If you are sick.What to do.85')}</li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.86')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.87')}</strong>{t('If you are sick.What to do.88')}</li>
              <li><strong>{t('If you are sick.What to do.89')}</strong>{t('If you are sick.What to do.90')}</li>
              <li><strong>{t('If you are sick.What to do.91')}</strong>{t('If you are sick.What to do.92')}</li>
              <li><strong>{t('If you are sick.What to do.93')}</strong>{t('If you are sick.What to do.94')}</li>
              <li><a href={t('If you are sick.What to do.96')}>{t('If you are sick.What to do.95')}</a></li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.97')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.98')}</strong>{t('If you are sick.What to do.99')}</li>
              <li><strong>{t('If you are sick.What to do.100')}</strong>{t('If you are sick.What to do.101')}</li>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.102')}</li>
            <br />
            <ul>
              <li><strong>{t('If you are sick.What to do.103')}</strong>{t('If you are sick.What to do.104')}</li>
              <li><strong>{t('If you are sick.What to do.105')}</strong>{t('If you are sick.What to do.106')}</li>
              <br />
              <p>{t('If you are sick.What to do.107')}</p>
              <li><strong>{t('If you are sick.What to do.108')}</strong></li>
              <li><strong>{t('If you are sick.What to do.109')}</strong>{t('If you are sick.What to do.110')}</li>
              <ul>
                <li>{t('If you are sick.What to do.111')}</li>
                <li>{t('If you are sick.What to do.112')}</li>
                <li><a href={t('If you are sick.What to do.114')}>{t('If you are sick.What to do.113')}</a></li>
              </ul>
            </ul>
            <br />
            <li className={styles.p}>{t('If you are sick.What to do.115')}</li>
            <br />
            <p>{t('If you are sick.What to do.116')}<a href={t('If you are sick.What to do.118')}>{t('If you are sick.What to do.117')}</a>{t('If you are sick.What to do.119')}</p>
            <br />
            <p><strong>{t('If you are sick.What to do.120')}</strong>{t('If you are sick.What to do.121')}</p>
          </ol>
          <br />
          <h4><NavLink to='/wiki#if-you-are-sick'>{t('Critical.1')}</NavLink></h4>
        </div>
      </ul>
    </div>
  )
}

const Infected = () => {
  const [open, setOpen] = useState({ Critical: false, Stay_safe: false });
  const { t } = useTranslation();

  const Critical = () => {
    const { t } = useTranslation();

    return (
      <ul>
        <li>{t('Critical.7')}</li>
        <li>{t('Critical.8')}</li>
      </ul>
    )
  }

  return (
    <ol >
      <br />

      <div id='critical'>
        <li onClick={() => { setOpen({ Critical: !open.Critical }) }} className={styles.medium_title} ><b style={{ color: 'red' }} >{t('Critical.9')}<a style={{ color: 'blue', border: '4px solid rgb(255, 0, 0)' }} href={t('Critical.11')}>{t('Critical.10')}</a>{t('Critical.12')}</b> <br /><span className={styles.span}>{!open.Critical ? t('Show more.2') : t('Show more.1')}</span></li>
        <Collapse in={open.Critical}>
          <div>
            <hr />
            <Critical />
          </div>
        </Collapse>
      </div>

      <hr />

      <div id='get_better' >
        <li onClick={() => { setOpen({ Stay_safe: !open.Stay_safe }) }} className={styles.medium_title} >{t('Critical.13')}<br /><span className={styles.span}>{!open.Stay_safe ? t('Show more.2') : t('Show more.1')}</span></li>
        <Collapse in={open.Stay_safe}>
          <div>
            <Stay_safe />
          </div>
        </Collapse>
      </div>
    </ol>

  )
}

export default function Critical() {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ Test: false, Infected: false });
  return (
    <div className={styles.div}>

      <br />
      <h1 className={styles.div_critical}>{t('Critical.2')}</h1>
      <br />
      <br />



      <div id='test' >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{t('Critical.3')}</h4>
            <a onClick={() => { setOpen({ Test: !open.Test }) }} class="btn btn-primary">{!open.Test ? t('Show more.1') : t('Show more.1')}</a>

            <Collapse in={open.Test}>
              <div>
                <br />
                <Test />
              </div>
            </Collapse>
          </div>
        </div>
      </div>



      <br />
      <br />


      <div id='infected' >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{t('Critical.4')}</h4>
            <a onClick={() => { setOpen({ Infected: !open.Infected }) }} class="btn btn-primary">{!open.Infected ? t('Show more.1') : t('Show more.1')}</a>

            <Collapse in={open.Infected}>
              <div>
                <br />
                <Infected />
              </div>
            </Collapse>
          </div>
        </div>
      </div>

    </div>
  )
}