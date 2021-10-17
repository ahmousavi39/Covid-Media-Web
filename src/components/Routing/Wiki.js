import React, { useState, useEffect } from 'react';
import styles from './Style.module.css';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'react-bootstrap';

var pathname = window.location.pathname;
pathname = pathname.replace(/^\/[\w\d]+\//, '');
var first_path = window.location.pathname;
first_path.indexOf(1);
first_path.toLowerCase();
first_path = first_path.split("/")[1];

export const QuickWiki = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ width: '100%', paddingTop: '2%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <ul className="nav mb-3" role="tablist" >
            <li id={pathname === 'wiki/all' ? styles.blue : styles.white}>
              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => window.location.pathname = first_path + '/wiki/all'} role="tab"
                aria-controls="pills-home" aria-selected="true">{t('Every thing.1')}</a>
            </li>
            <li id={pathname === 'wiki/quick' ? styles.blue : styles.white}>
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => window.location.pathname = first_path + '/wiki/quick'} role="tab"
                aria-controls="pills-profile" aria-selected="false">{t('Quick.1')}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.div}>
        <br />
        <h2 >{t('Title.1')}</h2>
        <iframe title='Youtube Video' className={styles.youtube} src={t('Video.1')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{t('Title.2')}</p>
        <br />
        <br />
        <h2 >{t('Title.3')}</h2>
        <iframe title='Youtube Video' className={styles.youtube} src={t('Video.2')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <br />
        <br />
        <h3 >{t('Title.4')}</h3>
        <br />
        <ol style={{ textAlign: 'left' }}>
          <p className={styles.medium_title}>{t('Symptoms.14')}</p>
          <ul>
            <li>{t('Symptoms.1')}</li>
            <li>{t('Symptoms.2')}</li>
            <li>{t('Symptoms.3')}</li>
          </ul>
          <br />
          <p className={styles.medium_title}>{t('Symptoms.15')}</p>
          <ul>
            <li>{t('Symptoms.4')}</li>
            <li>{t('Symptoms.5')}</li>
            <li>{t('Symptoms.6')}</li>
            <li>{t('Symptoms.7')}</li>
            <li>{t('Symptoms.8')}</li>
            <li>{t('Symptoms.9')}</li>
            <li>{t('Symptoms.10')}</li>
          </ul>
          <br />
          <p className={styles.medium_title}>{t('Symptoms.16')}</p>
          <ul>
            <li>{t('Symptoms.11')}</li>
            <li>{t('Symptoms.12')}</li>
            <li>{t('Symptoms.13')}</li>
          </ul>
          <br />

          <p className={styles.medium_title}>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
          <br />
          <p className={styles.medium_title}>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
          <br />
        </ol>

        <br />
        <br />
        <br />
        <h3>{t('Title.5')}</h3>
        <a href={t('Img.1')}> <img alt='Covid Media' src={t('Img.1')} className={styles.img1} /></a>
        <br />
        <br />
        <br />
        <br />
        <h3>{t('Title.6')}</h3>
        <br />
        <a href={t('Img.2')}> <img alt='Covid Media' src={t('Img.2')} className={styles.img2} /></a>
        <br />
        <br />
        <br />
        <br />
        <h3>{t('Title.7')}</h3>
        <br />
        <div className={styles.banner}>
          <a href={t('Img.3')}> <img alt='Covid Media' src={t('Img.3')} className={styles.img3} /></a>
          <a href={t('Img.4')}> <img alt='Covid Media' src={t('Img.4')} className={styles.img4} /></a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h3>{t('Title.8')}</h3>
        <br />
        <a href={t('Img.5')}> <img alt='Covid Media' src={t('Img.5')} className={styles.img5} /></a>
        <br />
        <br />
        <br />
        <br />
        <h3>{t('Title.9')}</h3>
        <br />
        <a href={t('Img.6')}><img alt='Covid Media' src={t('Img.6')} className={styles.img6} /></a>
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ color: 'red' }}>{t('Title.10')}</h3>
        <br />
        <a href={t('Img.7')}><img alt='Covid Media' src={t('Img.7')} className={styles.img7} /></a>
        <br />
        <br />
        <br />
        <br />
        <h3>{t('Title.11')}</h3>
        <br />

        <a href={t('Img.8')}> <img alt='Covid Media' src={t('Img.8')} className={styles.img9} /></a>

        <a href={t('Img.9')}><img alt='Covid Media' src={t('Img.9')} className={styles.img8} /></a>

        <a href={t('Img.10')}> <img alt='Covid Media' src={t('Img.10')} className={styles.img8} /></a>

        <a href={t('Img.11')}><img alt='Covid Media' src={t('Img.11')} className={styles.img8} /></a>
      </div>
    </>
  )
}




const WhatIsCovid19 = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ whatis: false })
  return (
    <div className="card" style={{fontWeight: 100}}>
      <div className="card-body">
        <h2 className="card-title">{t('What is covid19.1')}</h2>
        <a onClick={() => { setOpen({ whatis: !open.whatis }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.whatis ? t('Show more.1') : t('Show less.1')}</a>
        <Collapse in={open.whatis}>
          <div>
            <br />
            <hr />
            <div>
              <div style={{ textAlign: 'center' }}>
                <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('What is covid19.2')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <br />
              {t('What is covid19.3')}
              <br />
              <br />
              {t('What is covid19.4')}
              <br />
              <br />
              {t('What is covid19.5')}
              <br />
              <br />
              {t('What is covid19.6')}
              <br />
              <br />
              {t('What is covid19.7')}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

const Protect = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ protect: false });
  const [open1, setOpen1] = useState({ protect: false, spread: false, mask: false, gloves: false, cleaning: false, distancing: false, handwashing: false });
  return (
    <div className="card" style={{fontWeight: 100}}>
      <div className="card-body">
        <h2 className="card-title">{t('Prevent getting sick.1')}</h2>
        <a onClick={() => { setOpen({ protect: !open.protect }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.protect ? t('Show more.1') : t('Show less.1')}</a>
        <Collapse in={open.protect}>
          <div>
            <br />
            <hr />

            <div id='spread'>
              <h4 onClick={() => { setOpen1({ spread: !open1.spread }) }} className={styles.medium_title}>{t('Prevent getting sick.How it spreads.2')}<br /><span className={styles.span}>{!open1.spread ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.spread}>
                <div>
                  <br />
                  <p>{t('Prevent getting sick.How it spreads.3')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.How it spreads.4')}</h4>
                  <br />
                  <p><strong>{t('Prevent getting sick.How it spreads.5')}</strong></p>
                  <ul>
                    <li>{t('Prevent getting sick.How it spreads.6')}</li>
                    <li>{t('Prevent getting sick.How it spreads.7')}</li>
                    <li>{t('Prevent getting sick.How it spreads.8')}</li>
                    <li>{t('Prevent getting sick.How it spreads.9')}</li>
                  </ul>
                  <br />
                  <h4>{t('Prevent getting sick.How it spreads.10')}</h4>
                  <br />
                  <p>{t('Prevent getting sick.How it spreads.11')}</p>
                  <br />
                  <p><strong>{t('Prevent getting sick.How it spreads.12')}</strong>{t('Prevent getting sick.How it spreads.13')}<strong>{t('Prevent getting sick.How it spreads.14')}</strong>{t('Prevent getting sick.How it spreads.15')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.How it spreads.16')}</h4>
                  <br />
                  <p>{t('Prevent getting sick.How it spreads.17')}<strong>{t('Prevent getting sick.How it spreads.18')}</strong>{t('Prevent getting sick.How it spreads.19')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.How it spreads.20')}</h4>
                  <br />
                  <ul>
                    <li>{t('Prevent getting sick.How it spreads.21.1')} <strong>{t('Prevent getting sick.How it spreads.21.2')}</strong>{t('Prevent getting sick.How it spreads.21.3')}{t('Prevent getting sick.How it spreads.22')}</li>
                    <li>{t('Prevent getting sick.How it spreads.24')}<strong>{t('Prevent getting sick.How it spreads.25')}</strong>{t('Prevent getting sick.How it spreads.26')}<a href={t('Prevent getting sick.How it spreads.28')}>{t('Prevent getting sick.How it spreads.27')}</a>{t('Prevent getting sick.How it spreads.29')}{t('Prevent getting sick.How it spreads.30')}{t('Prevent getting sick.How it spreads.32')}</li>
                  </ul>
                  <br />
                  <h4>{t('Prevent getting sick.How it spreads.33')}</h4>
                  <br />
                  <p><strong>{t('Prevent getting sick.How it spreads.34')}</strong>{t('Prevent getting sick.How it spreads.35')}{t('Prevent getting sick.How it spreads.36')}</p>
                  <ul>
                    <li><a href={t('Prevent getting sick.How it spreads.38')}>{t('Prevent getting sick.How it spreads.37')}</a>{t('Prevent getting sick.How it spreads.39')}</li>
                    <li><a href={t('Prevent getting sick.How it spreads.41')}>{t('Prevent getting sick.How it spreads.40')}</a>{t('Prevent getting sick.How it spreads.42')}</li>
                    <li><a href={t('Prevent getting sick.How it spreads.44')}>{t('Prevent getting sick.How it spreads.43')}</a>{t('Prevent getting sick.How it spreads.45')}</li>
                    <li>{t('Prevent getting sick.How it spreads.46')}<a href={t('Prevent getting sick.How it spreads.48')}>{t('Prevent getting sick.How it spreads.47')}</a>{t('Prevent getting sick.How it spreads.49')}</li>
                  </ul>
                  <br />
                  <p>{t('Prevent getting sick.How it spreads.50')}<a href={t('Prevent getting sick.How it spreads.52')}>{t('Prevent getting sick.How it spreads.51')}</a>{t('Prevent getting sick.How it spreads.53')}</p>
                  <br />
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='protect'>
              <h4 onClick={() => { setOpen1({ protect: !open1.protect }) }} className={styles.medium_title} >{t('Prevent getting sick.Protect yourself.1')}<br /><span className={styles.span}>{!open1.protect ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.protect}>
                <div>
                  <br />
                  <p><strong>{t('Prevent getting sick.Protect yourself.2')}</strong>{t('Prevent getting sick.Protect yourself.3')}{t('Prevent getting sick.Protect yourself.4')}{t('Prevent getting sick.Protect yourself.6')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.Protect yourself.7')}</h4>
                  <br />
                  <ul>
                    <li>{t('Prevent getting sick.Protect yourself.8')}</li>
                    <li><strong>{t('Prevent getting sick.Protect yourself.9')}</strong></li>
                    <li>{t('Prevent getting sick.Protect yourself.10')}<a href={t('Prevent getting sick.Protect yourself.12')}>{t('Prevent getting sick.Protect yourself.11')}</a>{t('Prevent getting sick.Protect yourself.13')}</li>
                    <ul>
                      <li>{t('Prevent getting sick.Protect yourself.14')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.15')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.16')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.17')}</li>
                    </ul>
                  </ul>
                  <br />
                  <h4>{t('Prevent getting sick.Protect yourself.18')}</h4>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.19')}</p>
                  <ul>
                    <li><a href={t('Prevent getting sick.Protect yourself.21')}>{t('Prevent getting sick.Protect yourself.20')}</a>{t('Prevent getting sick.Protect yourself.22')}</li>
                    <li>{t('Prevent getting sick.Protect yourself.23')}</li>
                    <ul>
                      <li>{t('Prevent getting sick.Protect yourself.24')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.25')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.26')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.27')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.28')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.29')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.30')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.31')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.32')}</li>
                    </ul>
                    <li>{t('Prevent getting sick.Protect yourself.33')}<strong>{t('Prevent getting sick.Protect yourself.34')}</strong>{t('Prevent getting sick.Protect yourself.35')}</li>
                    <li><strong>{t('Prevent getting sick.Protect yourself.36')}</strong>{t('Prevent getting sick.Protect yourself.37')}</li>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.38')}</p>
                  <ul>
                    <li><strong>{t('Prevent getting sick.Protect yourself.39')}</strong>{t('Prevent getting sick.Protect yourself.40')}</li>
                    <ul>
                      <li>{t('Prevent getting sick.Protect yourself.41')}</li>
                    </ul>
                    <li><strong>{t('Prevent getting sick.Protect yourself.42')}</strong>{t('Prevent getting sick.Protect yourself.43')}</li>
                    <ul>
                      <li>{t('Prevent getting sick.Protect yourself.44')}</li>
                      <li><a href={t('Prevent getting sick.Protect yourself.46')}>{t('Prevent getting sick.Protect yourself.45')}</a>{t('Prevent getting sick.Protect yourself.47')}</li>
                      <li>{t('Prevent getting sick.Protect yourself.48')}{t('Prevent getting sick.Protect yourself.49')}{t('Prevent getting sick.Protect yourself.51')}</li>
                    </ul>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.52')}</p>
                  <ul>
                    <li>{t('Prevent getting sick.Protect yourself.53')}</li>
                    <li>{t('Prevent getting sick.Protect yourself.54')}</li>
                    <li>{t('Prevent getting sick.Protect yourself.55')}<a href={t('Prevent getting sick.Protect yourself.57')}>{t('Prevent getting sick.Protect yourself.56')}</a>{t('Prevent getting sick.Protect yourself.58')}<a href={t('Prevent getting sick.Protect yourself.60')}>{t('Prevent getting sick.Protect yourself.59')}</a>{t('Prevent getting sick.Protect yourself.61')}</li>
                    <ul>
                      <li>{t('Prevent getting sick.Protect yourself.62')}</li>
                    </ul>
                    <li>{t('Prevent getting sick.Protect yourself.63')}</li>
                    <li>{t('Prevent getting sick.Protect yourself.64')}</li>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.65')}</p>
                  <ul>
                    <li><strong>{t('Prevent getting sick.Protect yourself.66')}</strong>{t('Prevent getting sick.Protect yourself.67')}</li>
                    <li><strong>{t('Prevent getting sick.Protect yourself.68')}</strong>{t('Prevent getting sick.Protect yourself.69')}</li>
                    <li><strong>{t('Prevent getting sick.Protect yourself.70')}</strong>{t('Prevent getting sick.Protect yourself.71')}</li>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.72')}</p>
                  <ul>
                    <li><strong>{t('Prevent getting sick.Protect yourself.73')}<a href={t('Prevent getting sick.Protect yourself.75')}>{t('Prevent getting sick.Protect yourself.74')}</a>{t('Prevent getting sick.Protect yourself.76')}</strong>{t('Prevent getting sick.Protect yourself.77')}</li>
                    <li><strong>{t('Prevent getting sick.Protect yourself.78')}</strong>{t('Prevent getting sick.Protect yourself.79')}</li>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Protect yourself.80')}</p>
                  <ul>
                    <li><strong>{t('Prevent getting sick.Protect yourself.81')}</strong>{t('Prevent getting sick.Protect yourself.82')}<a href={t('Prevent getting sick.Protect yourself.84')}>{t('Prevent getting sick.Protect yourself.83')}</a>{t('Prevent getting sick.Protect yourself.85')}</li>
                    <ul><li>{t('Prevent getting sick.Protect yourself.86')}{t('Prevent getting sick.Protect yourself.87')}{t('Prevent getting sick.Protect yourself.89')}<a href={t('Prevent getting sick.Protect yourself.91')}>{t('Prevent getting sick.Protect yourself.90')}</a>{t('Prevent getting sick.Protect yourself.92')}</li></ul>
                    <li>{t('Prevent getting sick.Protect yourself.93')}</li>
                    <ul><li>{t('Prevent getting sick.Protect yourself.94')}</li></ul>
                    <li>{t('Prevent getting sick.Protect yourself.95.1')}<a href={t('Prevent getting sick.Protect yourself.95.3')}>{t('Prevent getting sick.Protect yourself.95.2')}</a>{t('Prevent getting sick.Protect yourself.95.4')}</li>
                  </ul>
                  <br />
                  <br />
                  <h4>{t('Prevent getting sick.Protect yourself.96')}</h4>
                  <iframe title='Youtube Video' className={styles.youtube} src={t('Prevent getting sick.Protect yourself.97')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h5>{t('Prevent getting sick.Protect yourself.98')}</h5>
                  <p><a href={t('Prevent getting sick.Protect yourself.99.2')}>{t('Prevent getting sick.Protect yourself.99.1')}</a>{t('Prevent getting sick.Protect yourself.99.3')}</p>
                  <br />
                  <h5>{t('Prevent getting sick.Protect yourself.100')}</h5>
                  <p>{t('Prevent getting sick.Protect yourself.101')}</p>
                  <br />

                  <h4>{t('Prevent getting sick.Protect yourself.102')}</h4>
                  <br />
                  <iframe title='Youtube Video' className={styles.youtube} src={t('Prevent getting sick.Protect yourself.103')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h5><a href={t('Prevent getting sick.Protect yourself.105')}><strong>{t('Prevent getting sick.Protect yourself.104')}</strong></a></h5>
                  <br />
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='masks'>
              <h4 onClick={() => { setOpen1({ mask: !open1.mask }) }} className={styles.medium_title} >{t('Prevent getting sick.Masks.1.1')}<br /><span className={styles.span}>{!open1.mask ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.mask}>
                <div>
                  <br />
                  <h4>{t('Prevent getting sick.Masks.1.2')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('Prevent getting sick.Masks.2')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.3')}<a href={t('Prevent getting sick.Masks.5')}>{t('Prevent getting sick.Masks.4')}</a>{t('Prevent getting sick.Masks.6')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.7.1')}<a href={t('Prevent getting sick.Masks.7.3')}>{t('Prevent getting sick.Masks.7.2')}</a>{t('Prevent getting sick.Masks.7.4')}<a href={t('Prevent getting sick.Masks.9')}>{t('Prevent getting sick.Masks.8')}</a>{t('Prevent getting sick.Masks.10')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.11')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Masks.12')}{t('Prevent getting sick.Masks.13')}{t('Prevent getting sick.Masks.15')}<a href={t('Prevent getting sick.Masks.17')}>{t('Prevent getting sick.Masks.16')}</a>{t('Prevent getting sick.Masks.18')}<a href={t('Prevent getting sick.Masks.20')}>{t('Prevent getting sick.Masks.19')}</a>{t('Prevent getting sick.Masks.21')}</p>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Masks.22')}</h4>
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Masks.23')}<a href={t('Prevent getting sick.Masks.25')}>{t('Prevent getting sick.Masks.24')}</a>{t('Prevent getting sick.Masks.26')}<a href={t('Prevent getting sick.Masks.28')}>{t('Prevent getting sick.Masks.27')}</a>{t('Prevent getting sick.Masks.29')}</p>
                    <ul>
                      <li><strong><a href={t('Prevent getting sick.Masks.31')}>{t('Prevent getting sick.Masks.30')}</a>
                        {t('Prevent getting sick.Masks.32')}</strong>{t('Prevent getting sick.Masks.33')}</li>
                      <li><strong>{t('Prevent getting sick.Masks.34')}</strong>{t('Prevent getting sick.Masks.35')}</li>
                      <li><strong>{t('Prevent getting sick.Masks.36')}</strong>{t('Prevent getting sick.Masks.37')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.39')}</li>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Masks.40')}</li>
                      <li>{t('Prevent getting sick.Masks.41')}</li>
                      <li>{t('Prevent getting sick.Masks.42')}</li>
                      <li>{t('Prevent getting sick.Masks.43')}</li>
                    </ul>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.44')} />
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.45')}</li>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Masks.46')}</li>
                      <li>{t('Prevent getting sick.Masks.47')}</li>
                      <li>{t('Prevent getting sick.Masks.48')}</li>
                      <li><strong>{t('Prevent getting sick.Masks.49')}</strong>{t('Prevent getting sick.Masks.50')}</li>
                      <li><strong>{t('Prevent getting sick.Masks.51')}</strong>{t('Prevent getting sick.Masks.52')}</li>
                    </ul>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.53')} />
                    <br />
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.54')}</li>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Masks.55')}</li>
                      <li>{t('Prevent getting sick.Masks.56')}</li>
                      <li>{t('Prevent getting sick.Masks.57')}</li>
                      <li>{t('Prevent getting sick.Masks.58')}</li>
                    </ul>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.59')} />
                    <br />
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.60')}</li>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Masks.61')}</li>
                      <li>{t('Prevent getting sick.Masks.62')}</li>
                      <li>{t('Prevent getting sick.Masks.63')}</li>
                      <li>{t('Prevent getting sick.Masks.64')}<a href={t('Prevent getting sick.Masks.66')}>{t('Prevent getting sick.Masks.65')}</a>{t('Prevent getting sick.Masks.67')}</li>
                      <li>{t('Prevent getting sick.Masks.68')}</li>
                    </ul>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.69')} />
                    <br />
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Masks.70')}</h4>
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Masks.71')}<a href={t('Prevent getting sick.Masks.72.2')}>{t('Prevent getting sick.Masks.72.1')}</a>{t('Prevent getting sick.Masks.72.3')}<a href={t('Prevent getting sick.Masks.73.2')}>{t('Prevent getting sick.Masks.73.1')}</a>{t('Prevent getting sick.Masks.73.3')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.74')}<a href={t('Prevent getting sick.Masks.75.2')}>{t('Prevent getting sick.Masks.75.1')}</a>{t('Prevent getting sick.Masks.75.3')}<a href={t('Prevent getting sick.Masks.76.2')}>{t('Prevent getting sick.Masks.76.1')}</a>{t('Prevent getting sick.Masks.76.3')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.78')}</li>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.79')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.80')}</li>
                      <li>{t('Prevent getting sick.Masks.81')}</li>
                    </ul>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.82')} />
                    <br />
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.83')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.84')}</li>
                      <ul>
                        <li>{t('Prevent getting sick.Masks.85')}</li>
                        <li>{t('Prevent getting sick.Masks.86')}</li>
                      </ul>
                      <li>{t('Prevent getting sick.Masks.87')}</li>
                      <li>{t('Prevent getting sick.Masks.88')}</li>
                      <li>{t('Prevent getting sick.Masks.89')}</li>
                      <br />
                      <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.90')} />
                      <br />
                      <br />
                      <p style={{ fontWeight: '550' }}>{t('Prevent getting sick.Masks.91')}</p>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.92')}</li>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.93')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.94')}</li>
                    </ul>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.95')} />
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.96')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.97')}</li>
                    </ul>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.98')} />
                    <br />
                    <br />
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Masks.99')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <li className={styles.p}><a href={t('Prevent getting sick.Masks.100.2')}>{t('Prevent getting sick.Masks.100.1')}</a>{t('Prevent getting sick.Masks.100.3')}</li>
                    <br />
                    <ul>
                      <li><strong>{t('Prevent getting sick.Masks.101')}</strong>:{t('Prevent getting sick.Masks.102')}</li>
                      <li><strong>{t('Prevent getting sick.Masks.103')}</strong>{t('Prevent getting sick.Masks.104')}</li>
                    </ul>
                    <br />
                    <p><a href={t('Prevent getting sick.Masks.105.2')}>{t('Prevent getting sick.Masks.105.1')}</a>{t('Prevent getting sick.Masks.105.3')}<a href={t('Prevent getting sick.Masks.107')}>{t('Prevent getting sick.Masks.106')}</a>{t('Prevent getting sick.Masks.108')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.109')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.110')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.111.1')}</li>
                    <br />
                    <p className={styles.p} style={{ fontWeight: '700' }}>{t('Prevent getting sick.Masks.111.2')}</p>
                    <img alt='Covid Media' className={styles.img} height='400px' src={t('Prevent getting sick.Masks.112')} />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.113')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.114')}</li>
                      <li>{t('Prevent getting sick.Masks.115')}</li>
                      <li>{t('Prevent getting sick.Masks.116')}</li>
                      <li>{t('Prevent getting sick.Masks.117')}</li>
                      <li>{t('Prevent getting sick.Masks.118')}</li>
                    </ul>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.119')}</p>
                    <p><strong>{t('Prevent getting sick.Masks.120')}</strong>{t('Prevent getting sick.Masks.121')}</p>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.122')} />
                    <p><strong>{t('Prevent getting sick.Masks.123')}</strong>{t('Prevent getting sick.Masks.124')}</p>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.125')} />
                    <p><strong>{t('Prevent getting sick.Masks.126')}</strong>{t('Prevent getting sick.Masks.127')}<br />{t('Prevent getting sick.Masks.128')}</p>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.129')} />
                    <p><strong>{t('Prevent getting sick.Masks.130')}</strong>{t('Prevent getting sick.Masks.131')}</p>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.132')} />
                    <br />
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.133')}</li>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.134')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.135')}</li>
                      <li>{t('Prevent getting sick.Masks.136')}</li>
                      <li>{t('Prevent getting sick.Masks.137')}</li>
                    </ul>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.138')}</p>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.139')} />

                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.140')} />

                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.141')} />

                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.142')} />

                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.143')} />

                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.144')} />
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.145')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.146')}</li>
                      <li>{t('Prevent getting sick.Masks.147')}</li>
                      <li>{t('Prevent getting sick.Masks.148')}</li>
                      <li>{t('Prevent getting sick.Masks.149')}</li>
                      <li>{t('Prevent getting sick.Masks.150')}</li>
                      <li>{t('Prevent getting sick.Masks.151')}</li>
                    </ul>
                    <p>{t('Prevent getting sick.Masks.152')}<a href={t('Prevent getting sick.Masks.154')}>{t('Prevent getting sick.Masks.153')}</a>{t('Prevent getting sick.Masks.155')}<a href={t('Prevent getting sick.Masks.157')}>{t('Prevent getting sick.Masks.156')}</a>{t('Prevent getting sick.Masks.158')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.159')}</li>
                    <br />
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Masks.160')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Masks.161')}</h4>
                  <br />
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <ul>
                      <li><a href={t('Prevent getting sick.Masks.162.2')}>{t('Prevent getting sick.Masks.162.1')}</a>{t('Prevent getting sick.Masks.162.3')}<a href={t('Prevent getting sick.Masks.164')}>{t('Prevent getting sick.Masks.163')}</a>{t('Prevent getting sick.Masks.165')}</li>
                      <li>{t('Prevent getting sick.Masks.166')}</li>
                      <li>{t('Prevent getting sick.Masks.167')}</li>
                      <li>{t('Prevent getting sick.Masks.168')}</li>
                    </ul>
                    <br />

                    <li className={styles.p}>{t('Prevent getting sick.Masks.169')}</li>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Masks.170')} />
                    <br />
                    <p>{t('Prevent getting sick.Masks.171')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.172')}</li>
                    <br />
                    <p style={{ fontWeight: '500' }}>{t('Prevent getting sick.Masks.173')}</p>
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Masks.174')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <br />
                    <ul>
                      <li><a href={t('Prevent getting sick.Masks.175.2')}>{t('Prevent getting sick.Masks.175.1')}</a>{t('Prevent getting sick.Masks.175.3')}<a href={t('Prevent getting sick.Masks.177')}>{t('Prevent getting sick.Masks.176')}</a>{t('Prevent getting sick.Masks.178')}</li>
                      <li>{t('Prevent getting sick.Masks.179')}<a href={t('Prevent getting sick.Masks.181')}>{t('Prevent getting sick.Masks.180')}</a>{t('Prevent getting sick.Masks.182')}</li>
                      <li>{t('Prevent getting sick.Masks.183.1')}<a href={t('Prevent getting sick.Masks.183.3')}>{t('Prevent getting sick.Masks.183.2')}</a>{t('Prevent getting sick.Masks.183.4')}<a href={t('Prevent getting sick.Masks.185')}>{t('Prevent getting sick.Masks.184')}</a>{t('Prevent getting sick.Masks.186')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.187')}</li>
                    <br />
                    <ul>
                      <li><a href={t('Prevent getting sick.Masks.189')}>{t('Prevent getting sick.Masks.188')}</a>{t('Prevent getting sick.Masks.190')}{t('Prevent getting sick.Masks.191')}{t('Prevent getting sick.Masks.193')}</li>
                      <li>{t('Prevent getting sick.Masks.194')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.195')}</li>
                    <br />
                    <ul>
                      <li><a href={t('Prevent getting sick.Masks.197')}>{t('Prevent getting sick.Masks.196')}</a>{t('Prevent getting sick.Masks.198')}<a href={t('Prevent getting sick.Masks.200')}>{t('Prevent getting sick.Masks.199')}</a>{t('Prevent getting sick.Masks.201')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.202')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Masks.203')}<strong>{t('Prevent getting sick.Masks.204')}</strong>{t('Prevent getting sick.Masks.205')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.206')}</li>
                      <li> {t('Prevent getting sick.Masks.207')}</li>
                      <li>{t('Prevent getting sick.Masks.208')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.209')}</li>
                    <br />
                    <p><a href={t('Prevent getting sick.Masks.210.2')}>{t('Prevent getting sick.Masks.210.1')}</a>{t('Prevent getting sick.Masks.210.3')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Masks.211')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Masks.212')}</li>
                      <li>{t('Prevent getting sick.Masks.213')}</li>
                      <li>{t('Prevent getting sick.Masks.214')}</li>
                      <li>{t('Prevent getting sick.Masks.215')}{t('Prevent getting sick.Masks.216')}{t('Prevent getting sick.Masks.218')}</li>
                      <li>{t('Prevent getting sick.Masks.219')}</li>
                      <li>{t('Prevent getting sick.Masks.220')}</li>
                    </ul>
                    <p>{t('Prevent getting sick.Masks.221')}</p>
                    <br />
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Masks.222')}</li>

                    <ul>
                      <li>{t('Prevent getting sick.Masks.223.1')}<a href={t('Prevent getting sick.Masks.223.3')}>{t('Prevent getting sick.Masks.223.2')}</a>{t('Prevent getting sick.Masks.223.4')}</li>
                      <li>{t('Prevent getting sick.Masks.223.5')}</li>
                      <ul>
                        <li>{t('Prevent getting sick.Masks.223.6')}</li>
                        <ul>
                          <li>{t('Prevent getting sick.Masks.223.7')}</li>
                          <li>{t('Prevent getting sick.Masks.223.8')}</li>
                        </ul>
                        <li>{t('Prevent getting sick.Masks.223.9')}</li>
                        <li>{t('Prevent getting sick.Masks.223.10')}</li>
                        <li>{t('Prevent getting sick.Masks.223.11')}<a href={t('Prevent getting sick.Masks.223.12.2')}>{t('Prevent getting sick.Masks.223.12.1')}</a>{t('Prevent getting sick.Masks.223.12.3')}</li>
                        <li><strong>{t('Prevent getting sick.Masks.223.14')}</strong></li>
                      </ul>
                    </ul>

                    <li className={styles.p}>{t('Prevent getting sick.Masks.225')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Masks.226.1')}<a href={t('Prevent getting sick.Masks.226.3')}>{t('Prevent getting sick.Masks.226.2')}</a>{t('Prevent getting sick.Masks.226.4')}</p>
                    <br />
                  </ol>
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='gloves'>
              <h4 onClick={() => { setOpen1({ gloves: !open1.gloves }) }} className={styles.medium_title} >{t('Prevent getting sick.Wearing gloves.0')}<br /><span className={styles.span}>{!open1.gloves ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.gloves}>
                <div>
                  <br />
                  <p>{t('Prevent getting sick.Wearing gloves.1')}<a href={t('Prevent getting sick.Wearing gloves.3')}>{t('Prevent getting sick.Wearing gloves.2')}</a>{t('Prevent getting sick.Wearing gloves.4')}</p>
                  <br />
                  <p>{t('Prevent getting sick.Wearing gloves.5')}<a href={t('Prevent getting sick.Wearing gloves.7')}>{t('Prevent getting sick.Wearing gloves.6')}</a>{t('Prevent getting sick.Wearing gloves.8')}<a href={t('Prevent getting sick.Wearing gloves.10')}>{t('Prevent getting sick.Wearing gloves.9')}</a>{t('Prevent getting sick.Wearing gloves.11')}<a href={t('Prevent getting sick.Wearing gloves.13')}>{t('Prevent getting sick.Wearing gloves.12')}</a>{t('Prevent getting sick.Wearing gloves.14')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.Wearing gloves.15')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Wearing gloves.16')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.17')}</p>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Wearing gloves.18')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.19')}<a href={t('Prevent getting sick.Wearing gloves.21')}>{t('Prevent getting sick.Wearing gloves.20')}</a>{t('Prevent getting sick.Wearing gloves.22')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Wearing gloves.23')}</li>
                      <ul>
                        <li>{t('Prevent getting sick.Wearing gloves.24')}</li>
                        <li>{t('Prevent getting sick.Wearing gloves.25')}</li>
                      </ul>
                      <li><a href={t('Prevent getting sick.Wearing gloves.26.2')}>{t('Prevent getting sick.Wearing gloves.26.1')}</a>{t('Prevent getting sick.Wearing gloves.27')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Wearing gloves.28')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.29')}<a href={t('Prevent getting sick.Wearing gloves.31')}>{t('Prevent getting sick.Wearing gloves.30')}</a></p>
                    <ul>
                      <li>{t('Prevent getting sick.Wearing gloves.32')}</li>
                      <li>{t('Prevent getting sick.Wearing gloves.33')}</li>
                      <li>{t('Prevent getting sick.Wearing gloves.34')}</li>
                      <li><a href={t('Prevent getting sick.Wearing gloves.36')}>{t('Prevent getting sick.Wearing gloves.35')}</a>{t('Prevent getting sick.Wearing gloves.37')}</li>
                    </ul>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Wearing gloves.38')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Wearing gloves.39')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Wearing gloves.40')}</li>
                      <li>{t('Prevent getting sick.Wearing gloves.41')}</li>
                    </ul>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Wearing gloves.42')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Wearing gloves.43')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.44')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.45')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.46')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Wearing gloves.47')}<a href={t('Prevent getting sick.Wearing gloves.49')}>{t('Prevent getting sick.Wearing gloves.48')}</a>{t('Prevent getting sick.Wearing gloves.50')}</li>
                      <li>{t('Prevent getting sick.Wearing gloves.51')}<a href={t('Prevent getting sick.Wearing gloves.53')}>{t('Prevent getting sick.Wearing gloves.52')}</a></li>
                      <li>{t('Prevent getting sick.Wearing gloves.54')}<a href={t('Prevent getting sick.Wearing gloves.56')}>{t('Prevent getting sick.Wearing gloves.55')}</a></li>
                    </ul>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Wearing gloves.57')}</h4>
                  <ol style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('Prevent getting sick.Wearing gloves.58')}{t('Prevent getting sick.Wearing gloves.59.1')}{t('Prevent getting sick.Wearing gloves.60')}{t('Prevent getting sick.Wearing gloves.61')}{t('Prevent getting sick.Wearing gloves.63')}</p>
                  </ol>
                  <br />
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='cleaning'>
              <h4 onClick={() => { setOpen1({ cleaning: !open1.cleaning }) }} className={styles.medium_title}>{t('Prevent getting sick.Cleaning your home.1')}<br /><span className={styles.span}>{!open1.cleaning ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.cleaning}>
                <div>
                  <br />
                  <h4>{t('Prevent getting sick.Cleaning your home.2')}</h4>
                  <br />
                  <ul>
                    <li>{t('Prevent getting sick.Cleaning your home.3')}</li>
                    <li>{t('Prevent getting sick.Cleaning your home.4')}</li>
                    <li>{t('Prevent getting sick.Cleaning your home.5')}</li>
                    <li>{t('Prevent getting sick.Cleaning your home.6')}</li>
                    <li>{t('Prevent getting sick.Cleaning your home.7')}<a href={t('Prevent getting sick.Cleaning your home.9')}>{t('Prevent getting sick.Cleaning your home.8')}</a>{t('Prevent getting sick.Cleaning your home.10')}</li>
                  </ul>
                  <br />
                  <h4>{t('Prevent getting sick.Cleaning your home.11')}</h4>
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.12')}</li>
                    <br />
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Cleaning your home.13')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.14')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.15')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.16')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.17')}<strong>{t('Prevent getting sick.Cleaning your home.18')}</strong>{t('Prevent getting sick.Cleaning your home.19')}<strong>{t('Prevent getting sick.Cleaning your home.20')}</strong>{t('Prevent getting sick.Cleaning your home.21')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.22')}</li>
                      <ul><li>{t('Prevent getting sick.Cleaning your home.23')}</li></ul>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.24')}</li>
                    <br />
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.25')}<a href={t('Prevent getting sick.Cleaning your home.27')}>{t('Prevent getting sick.Cleaning your home.26')}</a>{t('Prevent getting sick.Cleaning your home.28.1')}<br />{t('Prevent getting sick.Cleaning your home.28.2')}<a href={t('Prevent getting sick.Cleaning your home.30')}>{t('Prevent getting sick.Cleaning your home.29')}</a>{t('Prevent getting sick.Cleaning your home.31')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.32')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.33')}</li>
                    </ul>
                    <br />
                    <p><strong>{t('Prevent getting sick.Cleaning your home.34')}</strong>{t('Prevent getting sick.Cleaning your home.35')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.36')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.37')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.38')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.39')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.40')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.41')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.42')}</li>
                    </ul>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.43')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.44')}<a href={t('Prevent getting sick.Cleaning your home.46')}>{t('Prevent getting sick.Cleaning your home.45')}</a></p>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.47')}{t('Prevent getting sick.Cleaning your home.48')}{t('Prevent getting sick.Cleaning your home.50')}</p>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Cleaning your home.51')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.52')}</p>
                    <br />
                    <ul>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.53')}</strong>{t('Prevent getting sick.Cleaning your home.54')}</li>
                      <ul>
                        <li>{t('Prevent getting sick.Cleaning your home.55')}</li>
                        <li>{t('Prevent getting sick.Cleaning your home.56')}<br /><strong>{t('Prevent getting sick.Cleaning your home.57')}</strong>{t('Prevent getting sick.Cleaning your home.58')}<strong>{t('Prevent getting sick.Cleaning your home.59')}</strong>{t('Prevent getting sick.Cleaning your home.60')}<strong>{t('Prevent getting sick.Cleaning your home.61')}</strong>{t('Prevent getting sick.Cleaning your home.62')}</li>
                      </ul>
                      <li>{t('Prevent getting sick.Cleaning your home.63')}</li>
                      <ul><li>{t('Prevent getting sick.Cleaning your home.64')}</li></ul>
                      <br />
                      <h4>{t('Prevent getting sick.Cleaning your home.65')}</h4>
                      <br />
                      <li>{t('Prevent getting sick.Cleaning your home.66')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.67')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.68')}</strong>{t('Prevent getting sick.Cleaning your home.69')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.70')}</li>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Cleaning your home.71')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.72')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.73')}</p>
                    <ul>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.74')}</strong>{t('Prevent getting sick.Cleaning your home.75')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.76')}</strong>{t('Prevent getting sick.Cleaning your home.77')}</li>
                      <br />
                      <h4>{t('Prevent getting sick.Cleaning your home.78')}</h4>
                      <br />
                      <li>{t('Prevent getting sick.Cleaning your home.79')}<a href={t('Prevent getting sick.Cleaning your home.81')}>{t('Prevent getting sick.Cleaning your home.80')}</a>{t('Prevent getting sick.Cleaning your home.82')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.83')}</strong>{t('Prevent getting sick.Cleaning your home.85')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.86')}</li>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Cleaning your home.87')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.88')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.89')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.90')}<strong>{t('Prevent getting sick.Cleaning your home.91')}</strong>{t('Prevent getting sick.Cleaning your home.92')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.93')}<strong>{t('Prevent getting sick.Cleaning your home.94')}</strong>{t('Prevent getting sick.Cleaning your home.95')}</li>
                      <ul><li>{t('Prevent getting sick.Cleaning your home.96')}</li></ul>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.97')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.98')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.99')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.100')}</strong>{t('Prevent getting sick.Cleaning your home.101')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.102')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.103')}</strong>{t('Prevent getting sick.Cleaning your home.104')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.105')}<strong>{t('Prevent getting sick.Cleaning your home.106')}</strong>{t('Prevent getting sick.Cleaning your home.107')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.108')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.109')}</li>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Cleaning your home.110')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.111')}</p>
                    <br />
                    <ul>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.112')}</strong>
                        <ul>
                          <li>{t('Prevent getting sick.Cleaning your home.113')}</li>
                          <li>{t('Prevent getting sick.Cleaning your home.114')}</li>
                          <li>{t('Prevent getting sick.Cleaning your home.115')}</li>
                          <li>{t('Prevent getting sick.Cleaning your home.116')}</li>
                          <li>{t('Prevent getting sick.Cleaning your home.117')}</li>
                          <li>{t('Prevent getting sick.Cleaning your home.118')}</li>
                        </ul>
                      </li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.119')}</strong>{t('Prevent getting sick.Cleaning your home.120')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.121')}</strong>{t('Prevent getting sick.Cleaning your home.122')}</li>
                    </ul>
                    <br />
                    <p><strong>{t('Prevent getting sick.Cleaning your home.123')}</strong>{t('Prevent getting sick.Cleaning your home.124')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.125')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.126')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.127')}</li>
                      <p>{t('Prevent getting sick.Cleaning your home.128')}<a href={t('Prevent getting sick.Cleaning your home.130')}>{t('Prevent getting sick.Cleaning your home.129')}</a>{t('Prevent getting sick.Cleaning your home.131')}<a href={t('Prevent getting sick.Cleaning your home.133')}>{t('Prevent getting sick.Cleaning your home.132')}</a></p>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.134')}</strong>{t('Prevent getting sick.Cleaning your home.135')}</li>
                    </ul>
                  </ol>
                  <br />
                  <h4>{t('Prevent getting sick.Cleaning your home.136')}</h4>
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.137')}</li>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Cleaning your home.138')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.139')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.140')}<strong>{t('Prevent getting sick.Cleaning your home.141')}</strong>{t('Prevent getting sick.Cleaning your home.142')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Cleaning your home.143')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.144')}</strong>{t('Prevent getting sick.Cleaning your home.145')}</li>
                      <ul>
                        <li>{t('Prevent getting sick.Cleaning your home.146')}<strong>{t('Prevent getting sick.Cleaning your home.147')}</strong>{t('Prevent getting sick.Cleaning your home.148')}<a href={t('Prevent getting sick.Cleaning your home.150')} >{t('Prevent getting sick.Cleaning your home.149')}</a>{t('Prevent getting sick.Cleaning your home.151')}{t('Prevent getting sick.Cleaning your home.152')}</li>
                      </ul>

                      <li><strong>{t('Prevent getting sick.Cleaning your home.153')}</strong>{t('Prevent getting sick.Cleaning your home.154')}</li>
                      <li>{t('Prevent getting sick.Cleaning your home.155')}{t('Prevent getting sick.Cleaning your home.156')}{t('Prevent getting sick.Cleaning your home.158')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.159')}</li>
                    <br />
                    <ul className="false">
                      <li><strong>{t('Prevent getting sick.Cleaning your home.160')}</strong>{t('Prevent getting sick.Cleaning your home.161')}</li>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.162')}</strong>{t('Prevent getting sick.Cleaning your home.163')}</li>
                      <li><a href={t('Prevent getting sick.Cleaning your home.165')}>{t('Prevent getting sick.Cleaning your home.164')}</a>{t('Prevent getting sick.Cleaning your home.166')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Prevent getting sick.Cleaning your home.167')}</li>
                    <br />
                    <p>{t('Prevent getting sick.Cleaning your home.168')}</p>
                    <br />
                    <ul>
                      <li><strong>{t('Prevent getting sick.Cleaning your home.169')}</strong>{t('Prevent getting sick.Cleaning your home.170')}</li>
                    </ul>
                  </ol>
                </div>
              </Collapse>
            </div>

            <hr />
            <div id='distancing'>
              <h4 onClick={() => { setOpen1({ distancing: !open1.distancing }) }} className={styles.medium_title} >{t('Prevent getting sick.Social distancing.1')}<br /><span className={styles.span}>{!open1.distancing ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.distancing}>
                <div>
                  <br />
                  <p>{t('Prevent getting sick.Social distancing.2')}</p>
                  <br />
                  <h4>{t('Prevent getting sick.Social distancing.3')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Social distancing.4')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.5')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.6')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.7')}<a href={t('Prevent getting sick.Social distancing.9')}>{t('Prevent getting sick.Social distancing.8')}</a>{t('Prevent getting sick.Social distancing.10')}<a href={t('Prevent getting sick.Social distancing.12')}>{t('Prevent getting sick.Social distancing.11')}</a>{t('Prevent getting sick.Social distancing.13')}</p>
                  </div>
                  <br />
                  <h4>{t('Prevent getting sick.Social distancing.14')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Social distancing.15')}{t('Prevent getting sick.Social distancing.16')}{t('Prevent getting sick.Social distancing.18')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.19')}<a href={t('Prevent getting sick.Social distancing.20.2')}>{t('Prevent getting sick.Social distancing.20.1')}</a>{t('Prevent getting sick.Social distancing.21')}<a href={t('Prevent getting sick.Social distancing.23')}>{t('Prevent getting sick.Social distancing.22')}</a>{t('Prevent getting sick.Social distancing.24')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.25')}</p>
                    <p>{t('Prevent getting sick.Social distancing.26')}<a href={t('Prevent getting sick.Social distancing.28')}>{t('Prevent getting sick.Social distancing.27')}</a>{t('Prevent getting sick.Social distancing.29')}</p>
                  </div>
                  <br />
                  <h4>{t('Prevent getting sick.Social distancing.30')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Social distancing.31')}<a href={t('Prevent getting sick.Social distancing.33')}>{t('Prevent getting sick.Social distancing.32')}</a>{t('Prevent getting sick.Social distancing.34')}{t('Prevent getting sick.Social distancing.35')}{t('Prevent getting sick.Social distancing.37')}</p>
                    <br />
                    <ul>
                      <li><strong>{t('Prevent getting sick.Social distancing.38')}</strong>{t('Prevent getting sick.Social distancing.39')}</li>
                      <li><strong>{t('Prevent getting sick.Social distancing.40')}</strong>{t('Prevent getting sick.Social distancing.41')}{t('Prevent getting sick.Social distancing.42')}{t('Prevent getting sick.Social distancing.44')}</li>
                      <li><strong>{t('Prevent getting sick.Social distancing.45')}</strong><strong>{t('Prevent getting sick.Social distancing.46')}</strong><strong>{t('Prevent getting sick.Social distancing.48.1')}</strong>{t('Prevent getting sick.Social distancing.48.2')}<a href={t('Prevent getting sick.Social distancing.50')}>{t('Prevent getting sick.Social distancing.49')}</a>{t('Prevent getting sick.Social distancing.51')}</li>
                      <li><strong>{t('Prevent getting sick.Social distancing.52')}</strong>{t('Prevent getting sick.Social distancing.53')}{t('Prevent getting sick.Social distancing.54')}{t('Prevent getting sick.Social distancing.56')}</li>
                      <li><strong>{t('Prevent getting sick.Social distancing.57')}</strong><strong>{t('Prevent getting sick.Social distancing.58.1')}</strong>{t('Prevent getting sick.Social distancing.59')}<a href={t('Prevent getting sick.Social distancing.61')}>{t('Prevent getting sick.Social distancing.60')}</a>{t('Prevent getting sick.Social distancing.62')}</li>
                      <li><strong>{t('Prevent getting sick.Social distancing.63')}</strong>{t('Prevent getting sick.Social distancing.64')}{t('Prevent getting sick.Social distancing.65.1')}{t('Prevent getting sick.Social distancing.66')}</li>
                    </ul>
                    <br />
                    <p>{t('Prevent getting sick.Social distancing.67')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Social distancing.68')}</li>
                      <li>{t('Prevent getting sick.Social distancing.70')}</li>
                      <li>{t('Prevent getting sick.Social distancing.72')}</li>
                      <li>{t('Prevent getting sick.Social distancing.74')}</li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>

            <hr />
            <div id='handwashing'>
              <h4 onClick={() => { setOpen1({ handwashing: !open1.handwashing }) }} className={styles.medium_title} >{t('Prevent getting sick.Handwashing.1')}<br /><span className={styles.span}>{!open1.handwashing ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.handwashing}>
                <div>
                  <br />
                  <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('Prevent getting sick.Handwashing.2.1')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>{t('Prevent getting sick.Handwashing.2.2')}<a href={t('Prevent getting sick.Handwashing.4')}>{t('Prevent getting sick.Handwashing.3')}</a>{t('Prevent getting sick.Handwashing.5')}</p>
                  <br />
                  <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Handwashing.6')} />
                  <br />
                  <br />
                  <p><strong>{t('Prevent getting sick.Handwashing.7')}</strong></p>
                  <br />
                  <h4>{t('Prevent getting sick.Handwashing.8')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Handwashing.9')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Handwashing.10')}</li>
                      <li>{t('Prevent getting sick.Handwashing.11')}</li>
                      <li>{t('Prevent getting sick.Handwashing.12')}</li>
                      <li>{t('Prevent getting sick.Handwashing.13')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('Prevent getting sick.Handwashing.14')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Handwashing.15')}</p>
                    <ul>
                      <li><strong>{t('Prevent getting sick.Handwashing.16')}</strong>{t('Prevent getting sick.Handwashing.17')}<strong>{t('Prevent getting sick.Handwashing.18')}</strong>{t('Prevent getting sick.Handwashing.19')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.20')}</strong>{t('Prevent getting sick.Handwashing.21')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.22')}</strong>{t('Prevent getting sick.Handwashing.23')}<strong>{t('Prevent getting sick.Handwashing.24')}</strong>{t('Prevent getting sick.Handwashing.25')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.26')}</strong>{t('Prevent getting sick.Handwashing.27')}<strong>{t('Prevent getting sick.Handwashing.28')}</strong>{t('Prevent getting sick.Handwashing.29')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.30')}</strong>{t('Prevent getting sick.Handwashing.31')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.32')}</strong>{t('Prevent getting sick.Handwashing.33')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.35')}</strong>{t('Prevent getting sick.Handwashing.36')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.37')}</strong>{t('Prevent getting sick.Handwashing.38')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.39')}</strong>{t('Prevent getting sick.Handwashing.40')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.41')}</strong>{t('Prevent getting sick.Handwashing.42')}</li>
                    </ul>
                    <br />
                    <div className={styles.handwashingcovid}>
                      <p><strong>{t('Prevent getting sick.Handwashing.43')}</strong></p>
                      <ul>
                        <li>{t('Prevent getting sick.Handwashing.44')}</li>
                        <li>{t('Prevent getting sick.Handwashing.45')}</li>
                      </ul>
                    </div>
                  </div>

                  <br />
                  <h4>{t('Prevent getting sick.Handwashing.46')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Prevent getting sick.Handwashing.47')}</p>
                    <p>{t('Prevent getting sick.Handwashing.48')}</p>
                    <ol>
                      <li><strong>{t('Prevent getting sick.Handwashing.49')}</strong>{t('Prevent getting sick.Handwashing.50')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.51')}</strong>{t('Prevent getting sick.Handwashing.53')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.54')}</strong>{t('Prevent getting sick.Handwashing.55')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.56')}</strong>{t('Prevent getting sick.Handwashing.57')}</li>
                      <li><strong>{t('Prevent getting sick.Handwashing.58')}</strong>{t('Prevent getting sick.Handwashing.59')}</li>
                    </ol>
                    <br />
                    <h2>{t('Prevent getting sick.Handwashing.60.0')}</h2>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Handwashing.60.1')} />
                  </div>

                  <br />
                  <h4>{t('Prevent getting sick.Handwashing.60.2')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <img alt='Covid Media' className={styles.img} src={t('Prevent getting sick.Handwashing.61')} />
                    <br />
                    <br />
                    <p>{t('Prevent getting sick.Handwashing.62')}</p>
                    <br />
                    <p>{t('Prevent getting sick.Handwashing.63')}{t('Prevent getting sick.Handwashing.64')}{t('Prevent getting sick.Handwashing.66')}</p>
                    <br />
                    <p style={{ fontWeight: "500" }}>{t('Prevent getting sick.Handwashing.67')}</p>
                    <ul>
                      <li>{t('Prevent getting sick.Handwashing.68')}<strong>{t('Prevent getting sick.Handwashing.69')}</strong>{t('Prevent getting sick.Handwashing.70')}</li>
                      <li>{t('Prevent getting sick.Handwashing.71')}</li>
                      <li>{t('Prevent getting sick.Handwashing.72')}</li>
                    </ul>
                    <br />
                    <p><strong>{t('Prevent getting sick.Handwashing.73')}</strong>{t('Prevent getting sick.Handwashing.74')}</p>
                  </div>

                  <br />
                  <h4>{t('Prevent getting sick.Handwashing.78')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <ul>
                      <li>{t('Prevent getting sick.Handwashing.79')}</li>
                      <li>{t('Prevent getting sick.Handwashing.80')}</li>
                      <li>{t('Prevent getting sick.Handwashing.81')}</li>
                    </ul>
                  </div>

                </div>
              </Collapse>
            </div>
            <br />

          </div>
        </Collapse>
      </div>
    </div>
  )
}



const Sick = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ sick: false });
  const [open1, setOpen1] = useState({ whattodo: false, isolate: false, quarantine: false, caring: false, parents: false, canbearound: false });
  return (
    <div className="card" style={{fontWeight: 100}}>
      <div className="card-body">
        <h2 className="card-title">{t('If you are sick.1')}</h2>
        <a onClick={() => { setOpen({ sick: !open.sick }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.sick ? t('Show more.1') : t('Show less.1')}</a>

        <Collapse in={open.sick}>
          <div>

            <br />
            <hr />

            <div id='whattodo'>
              <h4 onClick={() => { setOpen1({ whattodo: !open1.whattodo }) }} className={styles.medium_title} >{t('If you are sick.What to do.1')}<br /><span className={styles.span}>{!open1.whattodo ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.whattodo}>
                <div>
                  <br />
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
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='isolate'>
              <h4 onClick={() => { setOpen1({ isolate: !open1.isolate }) }} className={styles.medium_title} >{t('If you are sick.Isolate.1')}<br /><span className={styles.span}>{!open1.isolate ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.isolate}>
                <div>
                  <br />
                  <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('If you are sick.Isolate.2')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <br />
                  <p><strong>{t('If you are sick.Isolate.3')}</strong>{t('If you are sick.Isolate.4')}</p>
                  <br />
                  <p>{t('If you are sick.Isolate.5')}</p>

                  <br />
                  <h4>{t('If you are sick.Isolate.6')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.Isolate.7')}</p>
                    <ul>
                      <li>{t('If you are sick.Isolate.8')}<a href={t('If you are sick.Isolate.10')}>{t('If you are sick.Isolate.9')}</a>{t('If you are sick.Isolate.11')}</li>
                      <li>{t('If you are sick.Isolate.12')}</li>
                    </ul>
                  </div>

                  <br />
                  <h4>{t('If you are sick.Isolate.13')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p style={{ fontWeight: "550" }}>{t('If you are sick.Isolate.14')}</p>
                    <ul>
                      <li>{t('If you are sick.Isolate.15')}<a href={t('If you are sick.Isolate.17')}>{t('If you are sick.Isolate.16')}</a>{t('If you are sick.Isolate.18')}</li>
                      <li>{t('If you are sick.Isolate.19')}</li>
                      <li>{t('If you are sick.Isolate.20')}</li>
                      <li>{t('If you are sick.Isolate.21')}</li>
                      <li>{t('If you are sick.Isolate.22')}</li>
                      <li>{t('If you are sick.Isolate.23')}</li>
                    </ul>
                    <br />
                    <p><a href={t('If you are sick.Isolate.25')}>{t('If you are sick.Isolate.24')}</a></p>
                  </div>

                  <br />
                  <h4>{t('If you are sick.Isolate.26')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.Isolate.27')}</p>
                    <br />
                    <p>{t('If you are sick.Isolate.28')}</p>
                    <br />
                    <h5>{t('If you are sick.Isolate.29')}</h5>
                    <br />
                    <p>{t('If you are sick.Isolate.30')}</p>
                    <ul>
                      <li>{t('If you are sick.Isolate.31')}<strong>{t('If you are sick.Isolate.32')}</strong></li>
                      <li>{t('If you are sick.Isolate.33')}<strong>{t('If you are sick.Isolate.34')}</strong></li>
                      <li>{t('If you are sick.Isolate.35')}</li>
                    </ul>
                    <br />
                    <p>{t('If you are sick.Isolate.36')}</p>
                    <br />
                    <h5>{t('If you are sick.Isolate.37')}</h5>
                    <br />
                    <p>{t('If you are sick.Isolate.38')}</p>
                    <ul>
                      <li>{t('If you are sick.Isolate.39')}</li>
                    </ul>
                    <br />
                    <p>{t('If you are sick.Isolate.40')}</p>
                    <br />
                    <p>{t('If you are sick.Isolate.41')}</p>
                  </div>

                  <br />
                  <h4>{t('If you are sick.Isolate.42')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.Isolate.43')}{t('If you are sick.Isolate.44')}</p>                  <p>{t('If you are sick.Isolate.45')}</p>
                    <br />
                    <p>{t('If you are sick.Isolate.46')}</p>
                    <br />
                    <p>{t('If you are sick.Isolate.47')}</p>
                  </div>

                </div>
              </Collapse>
            </div>

            <hr />

            <div id='quarantine'>
              <h4 onClick={() => { setOpen1({ quarantine: !open1.quarantine }) }} className={styles.medium_title} >{t('If you are sick.Quarantine.1')}<br /><span className={styles.span}>{!open1.quarantine ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.quarantine}>
                <div>
                  <br />
                  <p><strong>{t('If you are sick.Quarantine.2')}</strong></p>
                  <p>{t('If you are sick.Quarantine.3')}</p>
                  <br />
                  <p>{t('If you are sick.Quarantine.4')}</p>
                  <br />
                  <p>{t('If you are sick.Quarantine.5')}</p>
                  <br />
                  <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('If you are sick.Quarantine.11')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <br />
                  <p><strong>{t('If you are sick.Quarantine.12')}</strong>{t('If you are sick.Quarantine.13')}</p>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('If you are sick.Quarantine.14')}</p>
                  <br />
                  <p><strong>{t('If you are sick.Quarantine.15')}</strong></p>
                  <br />
                  <p>{t('If you are sick.Quarantine.16')}</p>
                  <br />
                  <p><strong>{t('If you are sick.Quarantine.17')}</strong></p>
                  <ul>
                    <li>{t('If you are sick.Quarantine.18')}</li>
                    <li>{t('If you are sick.Quarantine.19')}</li>
                    <li>{t('If you are sick.Quarantine.20')}</li>
                    <li>{t('If you are sick.Quarantine.21')}</li>
                    <li>{t('If you are sick.Quarantine.22')}</li>
                  </ul>
                  <br />
                  <p className={styles.p} style={{ fontWeight: '700' }}>{t('If you are sick.Quarantine.23')}</p>
                  <p><strong>{t('If you are sick.Quarantine.24')}</strong></p>
                  <ul>
                    <li>{t('If you are sick.Quarantine.25')}</li>
                    <li>{t('If you are sick.Quarantine.26')}<a href={t('If you are sick.Quarantine.28')}>{t('If you are sick.Quarantine.27')}</a>{t('If you are sick.Quarantine.29')}</li>
                    <li>{t('If you are sick.Quarantine.30')}{t('If you are sick.Quarantine.31')}{t('If you are sick.Quarantine.33')}</li>
                  </ul>

                  <br />

                  <h4>{t('If you are sick.Quarantine.34')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.Quarantine.35')}</p>
                    <br />
                    <p><strong>{t('If you are sick.Quarantine.36')}</strong></p>
                    <br />
                    <p>{t('If you are sick.Quarantine.37')}</p>
                  </div>

                  <br />

                  <h4>{t('If you are sick.Quarantine.38')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.Quarantine.39')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.40')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.41')}</p>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('If you are sick.Quarantine.42')} />
                  </div>

                  <br />

                  <h4>{t('If you are sick.Quarantine.43')}</h4>
                  <div style={{ paddingLeft: "5%" }}>
                    <br />
                    <p>{t('If you are sick.Quarantine.44')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.45')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.46')}</p>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('If you are sick.Quarantine.47')} />
                  </div>

                  <br />

                  <h4>{t('If you are sick.Quarantine.48')}</h4>
                  <div>
                    <br />
                    <p>{t('If you are sick.Quarantine.49')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.50')}<strong>{t('If you are sick.Quarantine.51')}</strong></p>
                    <br />
                    <p>{t('If you are sick.Quarantine.52')}</p>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('If you are sick.Quarantine.53')} />
                  </div>

                  <br />

                  <h4>{t('If you are sick.Quarantine.54')}</h4>
                  <div style={{ paddingLeft: "5%" }}>
                    <br />
                    <p>{t('If you are sick.Quarantine.55')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.56')}<a href={t('If you are sick.Quarantine.58')}>{t('If you are sick.Quarantine.57')}</a>{t('If you are sick.Quarantine.59')}</p>
                    <br />
                    <p>{t('If you are sick.Quarantine.60')}</p>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('If you are sick.Quarantine.61')} />
                  </div>

                </div>
              </Collapse>
            </div>


            <hr />

            <div id='caring'>
              <h4 onClick={() => { setOpen1({ caring: !open1.caring }) }} className={styles.medium_title} >{t('If you are sick.Caring.1')}<br /><span className={styles.span}>{!open1.caring ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.caring}>
                <div>
                  <br />
                  <p>{t('If you are sick.Caring.2')}<a href={t('If you are sick.Caring.4')}>{t('If you are sick.Caring.3')}</a>{t('If you are sick.Caring.5')}</p>
                  <br />
                  <p><strong>{t('If you are sick.Caring.6')}</strong>{t('If you are sick.Caring.7')}{t('If you are sick.Caring.9')}</p>
                  <br />
                  <h4>{t('If you are sick.Caring.11')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <img alt='Covid Media' className={styles.img} src={t('If you are sick.Caring.12')} />
                    <br />
                    <p>{t('If you are sick.Caring.13')}</p>
                    <br />
                    <ul>
                      <li>{t('If you are sick.Caring.14')}</li>
                      <ul><li>{t('If you are sick.Caring.15')}</li></ul>
                      <li>{t('If you are sick.Caring.16')}</li>
                      <li>{t('If you are sick.Caring.17')}</li>
                      <li>{t('If you are sick.Caring.18')}</li>
                      <li>{t('If you are sick.Caring.19')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('If you are sick.Caring.20')}</h4>
                  <br />
                  <div style={{ paddingLeft: "5%" }}>
                    <ul>
                      <li>{t('If you are sick.Caring.21')}</li>
                      <li><a href={t('If you are sick.Caring.23')}>{t('If you are sick.Caring.22')}</a>{t('If you are sick.Caring.24')}</li>
                      <li>{t('If you are sick.Caring.25')}</li>
                    </ul>
                    <br />
                    <h4>{t('If you are sick.Caring.26')}</h4>
                    <br />
                    <p>{t('If you are sick.Caring.27')}<strong>{t('If you are sick.Caring.28')}</strong>{t('If you are sick.Caring.29')}<strong>{t('If you are sick.Caring.30')}</strong></p>
                    <ul>
                      <li>{t('If you are sick.Caring.31')}</li>
                      <li>{t('If you are sick.Caring.32')}</li>
                      <li>{t('If you are sick.Caring.33')}</li>
                      <li>{t('If you are sick.Caring.34')}</li>
                      <li>{t('If you are sick.Caring.35')}</li>
                    </ul>
                    <br />
                    <p>{t('If you are sick.Caring.36')}</p>
                    <br />
                    <p><strong>{t('If you are sick.Caring.37.1')}<a className={styles.number} href={t('If you are sick.Caring.37.2')}>{t('If you are sick.Caring.37.2')}</a>{t('If you are sick.Caring.37.4')}</strong>{t('If you are sick.Caring.38')}</p>
                  </div>
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='parents'>
              <h4 onClick={() => { setOpen1({ parents: !open1.parents }) }} className={styles.medium_title} >{t('If you are sick.Parents.1')}<br /><span className={styles.span}>{!open1.parents ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.parents}>
                <div>
                  <br />
                  <h4>{t('If you are sick.Parents.2')}</h4>
                  <br />
                  <div style={{ paddingLeft: "5%" }}>
                    <p>{t('If you are sick.Parents.3')}<a href={t('If you are sick.Parents.5')}>{t('If you are sick.Parents.4')}</a>{t('If you are sick.Parents.6')}<a href={t('If you are sick.Parents.8')}>{t('If you are sick.Parents.7')}</a>{t('If you are sick.Parents.9')}<a href={t('If you are sick.Parents.11')}>{t('If you are sick.Parents.10')}</a>{t('If you are sick.Parents.13')}</p>
                    <br />
                    <p>{t('If you are sick.Parents.14')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.Parents.15')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.Parents.16')}<a href={t('If you are sick.Parents.18')}>{t('If you are sick.Parents.17')}</a>{t('If you are sick.Parents.19')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.Parents.20')}</h4>
                  <br />
                  <div style={{ paddingLeft: "5%" }}>
                    <p>{t('If you are sick.Parents.21')}</p>
                    <ul>
                      <li>{t('If you are sick.Parents.22')}</li>
                      <li>{t('If you are sick.Parents.23')}{t('If you are sick.Parents.24')}{t('If you are sick.Parents.26')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('If you are sick.Parents.27')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.Parents.28')}</p>
                    <ul>
                      <li><a href={t('If you are sick.Parents.30')}>{t('If you are sick.Parents.29')}</a>{t('If you are sick.Parents.31')}</li>
                      <li>{t('If you are sick.Parents.32')}<a href={t('If you are sick.Parents.34')}>{t('If you are sick.Parents.33')}</a>{t('If you are sick.Parents.35')}</li>
                      <li>{t('If you are sick.Parents.36')}<a href={t('If you are sick.Parents.38')}>{t('If you are sick.Parents.37')}</a>{t('If you are sick.Parents.39')}</li>
                      <li>{t('If you are sick.Parents.40')}</li>
                      <ul>
                        <li>{t('If you are sick.Parents.41')}</li>
                        <li>{t('If you are sick.Parents.42')}</li>
                        <li>{t('If you are sick.Parents.43')}</li>
                      </ul>
                      <li>{t('If you are sick.Parents.44')}</li>
                      <li>{t('If you are sick.Parents.45')}<a href={t('If you are sick.Parents.47')}>{t('If you are sick.Parents.46')}</a>{t('If you are sick.Parents.48')}</li>
                      <li>{t('If you are sick.Parents.49')}</li>
                      <li>{t('If you are sick.Parents.50')}</li>
                      <ul>
                        <li>{t('If you are sick.Parents.51')}</li>
                        <li>{t('If you are sick.Parents.52')}<a href={t('If you are sick.Parents.54')}>{t('If you are sick.Parents.53')}</a>{t('If you are sick.Parents.55')}{t('If you are sick.Parents.56')}{t('If you are sick.Parents.58')}</li>
                        <li>{t('If you are sick.Parents.59')}<a hre={t('If you are sick.Parents.61')}>{t('If you are sick.Parents.60')}{t('If you are sick.Parents.62')}</a></li>
                      </ul>
                      <li>{t('If you are sick.Parents.63')}{t('If you are sick.Parents.64')}{t('If you are sick.Parents.66')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('If you are sick.Parents.67')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.Parents.68')}<a href={t('If you are sick.Parents.70')}>{t('If you are sick.Parents.69')}</a>{t('If you are sick.Parents.71')}</p>
                    <ul>
                      <li>{t('If you are sick.Parents.72')}</li>
                      <li>{t('If you are sick.Parents.73')}</li>
                      <ul>
                        <li>{t('If you are sick.Parents.74')}<a href={t('If you are sick.Parents.76')}>{t('If you are sick.Parents.75')}</a>{t('If you are sick.Parents.77')}</li>
                        <li>{t('If you are sick.Parents.78')}<a href={t('If you are sick.Parents.80')}>{t('If you are sick.Parents.79')}</a>{t('If you are sick.Parents.81')}{t('If you are sick.Parents.82')}{t('If you are sick.Parents.84')}</li>
                        <li>{t('If you are sick.Parents.85')}<a href={t('If you are sick.Parents.87')}>{t('If you are sick.Parents.86')}</a>{t('If you are sick.Parents.88')}</li>
                      </ul>
                      <li>{t('If you are sick.Parents.89')}{t('If you are sick.Parents.90')}{t('If you are sick.Parents.92')}</li>
                    </ul>
                    <br />
                    <p>{t('If you are sick.Parents.93')}</p>
                    <br />
                    <p>{t('If you are sick.Parents.94')}<a href={t('If you are sick.Parents.96')}>{t('If you are sick.Parents.95')}</a>{t('If you are sick.Parents.97')}</p>
                  </div>
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='canbearound'>
              <h4 onClick={() => { setOpen1({ canbearound: !open1.canbearound }) }} className={styles.medium_title} >{t('If you are sick.When You Can be Around.1')}<br /><span className={styles.span}>{!open1.canbearound ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.canbearound}>
                <div>
                  <br />
                  <p><a href={t('If you are sick.When You Can be Around.3')}>{t('If you are sick.When You Can be Around.2')}</a>{t('If you are sick.When You Can be Around.4')}<strong>{t('If you are sick.When You Can be Around.5')}<a href={t('If you are sick.When You Can be Around.7')}>{t('If you are sick.When You Can be Around.6')}</a>{t('If you are sick.When You Can be Around.8')}</strong>{t('If you are sick.When You Can be Around.9')}</p>
                  <br />
                  <p><strong>{t('If you are sick.When You Can be Around.10')}</strong></p>
                  <p>{t('If you are sick.When You Can be Around.11')}</p>
                  <br />
                  <p>{t('If you are sick.When You Can be Around.12')}</p>
                  <br />
                  <p>{t('If you are sick.When You Can be Around.13')}</p>
                  <br />
                  <p>{t('If you are sick.When You Can be Around.14')}</p>
                  <ul>
                    <li>{t('If you are sick.When You Can be Around.15')}</li>
                    <li>{t('If you are sick.When You Can be Around.17')}</li>
                  </ul>
                  <br />
                  <p><strong>{t('If you are sick.When You Can be Around.19')}</strong></p>
                  <p>{t('If you are sick.When You Can be Around.20')}</p>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.21')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.When You Can be Around.22')}</p>
                    <ul>
                      <li>{t('If you are sick.When You Can be Around.23')}<strong>{t('If you are sick.When You Can be Around.24')}</strong></li>
                      <li>{t('If you are sick.When You Can be Around.25')}<strong>{t('If you are sick.When You Can be Around.26')}</strong></li>
                      <li>{t('If you are sick.When You Can be Around.27')}</li>
                    </ul>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.28')}</p>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.29')}</p>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.30')}<strong>{t('If you are sick.When You Can be Around.31')}</strong>{t('If you are sick.When You Can be Around.32')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.33')}</h4>
                  <br />
                  <div style={{ paddingLeft: "5%" }}>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.34')}</p>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.35')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.36')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.37')}{t('If you are sick.When You Can be Around.38')}{t('If you are sick.When You Can be Around.40')}</p>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.41')}{t('If you are sick.When You Can be Around.42')}{t('If you are sick.When You Can be Around.44')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.45')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.46')}<strong>{t('If you are sick.When You Can be Around.47')}</strong>{t('If you are sick.When You Can be Around.48')}</p>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.49')}</p>
                    <ul>
                      <li>{t('If you are sick.When You Can be Around.50')}<strong>{t('If you are sick.When You Can be Around.51')}</strong></li>
                      <li>{t('If you are sick.When You Can be Around.52')}<strong>{t('If you are sick.When You Can be Around.53')}</strong></li>
                      <li>{t('If you are sick.When You Can be Around.54')}</li>
                    </ul>
                    <br />
                    <p><strong>{t('If you are sick.When You Can be Around.55')}</strong>{t('If you are sick.When You Can be Around.56')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.57')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('If you are sick.When You Can be Around.58')}</p>
                    <p>{t('If you are sick.When You Can be Around.59')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.61')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('If you are sick.When You Can be Around.62')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.63')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.64')}</p>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.65')}</h4>
                  <div>
                    <iframe title='Youtube Video' className={styles.youtube} width="560" height="315" src={t('If you are sick.When You Can be Around.66')} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <br />
                  <h4>{t('If you are sick.When You Can be Around.67')}</h4>
                  <div style={{ paddingLeft: '5%' }}>
                    <br />
                    <p>{t('If you are sick.When You Can be Around.68')}</p>
                  </div>
                </div>
              </Collapse>
            </div>

          </div>
        </Collapse>

      </div>
    </div>
  )
}

const Symptoms = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ symptoms: false });
  return (
    <div className="card" style={{fontWeight: 100}}>
      <div className="card-body">
        <h2 className="card-title">{t('Symptomses.1')}</h2>
        <a onClick={() => { setOpen({ symptoms: !open.symptoms }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.symptoms ? t('Show more.1') : t('Show less.1')}</a>

        <Collapse in={open.symptoms}>
          <div>
            <br />
            <hr />
            <div id='symptoms'>
              <h4>{t('Symptomses.2')}</h4>
              <br />
              <div style={{ paddingLeft: '5%' }}>
                <ul>
                  <li>{t('Symptomses.3')}</li>
                  <li><strong>{t('Symptomses.4')}</strong>{t('Symptomses.5')}</li>
                </ul>
              </div>
              <br />
              <h4>{t('Symptomses.6')}</h4>
              <br />
              <div style={{ paddingLeft: '5%' }}>
                <p>{t('Symptomses.7')}<strong>{t('Symptomses.8')}</strong>{t('Symptomses.9')}</p>
                <ul>
                  <li>{t('Symptomses.10')}</li>
                  <li>{t('Symptomses.11')}</li>
                  <li>{t('Symptomses.12')}</li>
                  <li>{t('Symptomses.13')}</li>
                  <li>{t('Symptomses.14')}</li>
                  <li>{t('Symptomses.15')}</li>
                  <li>{t('Symptomses.16')}</li>
                  <li>{t('Symptomses.17')}</li>
                  <li>{t('Symptomses.18')}</li>
                  <li>{t('Symptomses.19')}</li>
                  <li>{t('Symptomses.20')}</li>
                </ul>
                <br />
                <p>{t('Symptomses.21')}</p>
              </div>
              <br />
              <h4>{t('Symptomses.22')}</h4>
              <br />
              <div style={{ paddingLeft: '5%' }}>
                <p>{t('Symptomses.23')}<strong>{t('Symptomses.24')}</strong>{t('Symptomses.25')}<strong>{t('Symptomses.26')}</strong></p>
                <ul>
                  <li>{t('Symptomses.27')}</li>
                  <li>{t('Symptomses.28')}</li>
                  <li>{t('Symptomses.29')}</li>
                  <li>{t('Symptomses.30')}</li>
                  <li>{t('Symptomses.31')}</li>
                </ul>
                <br />
                <p>{t('Symptomses.32')}</p>
                <br />
                <p><strong>{t('Symptomses.33')}</strong>{t('Symptomses.24')}</p>
              </div>
              <br />
              <h4>{t('Symptomses.35')}</h4>
              <br />
              <div style={{ paddingLeft: '5%' }}>
                <ul>
                  <li><a href={t('Symptomses.37')}>{t('Symptomses.36')}</a></li>
                  <li><a href={t('Symptomses.39')}>{t('Symptomses.38')}</a></li>
                  <li><a href={t('Symptomses.41')}>{t('Symptomses.40')}</a></li>
                </ul>
              </div>
              <br />
              <h4>{t('Symptomses.42')}</h4>
              <br />
              <div style={{ paddingLeft: '5%' }}>
                <p>{t('Symptomses.43')}</p>
                <p>{t('Symptomses.44')}</p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}




const Testing = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState({ testing: false });
  const [open1, setOpen1] = useState({ testing: false, currentinfection: false, pastinfection: false });

  return (
    <div className="card" style={{fontWeight: 100}}>
      <div className="card-body">
        <h2 className="card-title">{t('Testing.1')}</h2>
        <a onClick={() => { setOpen({ testing: !open.testing }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.testing ? t('Show more.1') : t('Show less.1')}</a>

        <Collapse in={open.testing}>
          <div>

            <br />
            <hr />

            <div id='testing'>
              <h4 onClick={() => { setOpen1({ testing: !open1.testing }) }} className={styles.medium_title} >{t('Testing.Testing.1')}<br /><span className={styles.span}>{!open1.testing ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse id='testing1' in={open1.testing}>
                <div>
                  <br />
                  <p><a href={t('Testing.Testing.3')} target="_blank">{t('Testing.Testing.2')}</a>{t('Testing.Testing.4')}</p>
                  <br />
                  <p>{t('Testing.Testing.5')}<a href={t('Testing.Testing.7')}>{t('Testing.Testing.6')}</a>{t('Testing.Testing.8')}<a href={t('Testing.Testing.10')}>{t('Testing.Testing.9')}</a>{t('Testing.Testing.11')}</p>
                  <ul>
                    <li>{t('Testing.Testing.12')}</li>
                    <li>{t('Testing.Testing.13')}</li>
                  </ul>
                  <br />
                  <p>{t('Testing.Testing.14')}<strong>{t('Testing.Testing.15')}<a href={t('Testing.Testing.17')}>{t('Testing.Testing.16')}</a>{t('Testing.Testing.18')}</strong></p>
                  <br />
                  <h4>{t('Testing.Testing.19')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <ul>
                      <li>{t('Testing.Testing.20')}<a href={t('Testing.Testing.22')}>{t('Testing.Testing.21')}</a>{t('Testing.Testing.23')}</li>
                      <li>{t('Testing.Testing.24')}</li>
                      <li>{t('Testing.Testing.25')}</li>
                      <li>{t('Testing.Testing.26')}<a href={t('Testing.Testing.28')}>{t('Testing.Testing.27')}</a>{t('Testing.Testing.29')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('Testing.Testing.30')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <ul>
                      <li><strong>{t('Testing.Testing.31')}</strong>{t('Testing.Testing.32')}<a href={t('Testing.Testing.34')}>{t('Testing.Testing.33')}</a>{t('Testing.Testing.35')}</li>
                      <li><strong>{t('Testing.Testing.36')}</strong>{t('Testing.Testing.37')}</li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='currentinfection'>
              <h4 onClick={() => { setOpen1({ currentinfection: !open1.currentinfection }) }} className={styles.medium_title} >{t('Testing.Currentinfection.1')}<br /><span className={styles.span}>{!open1.currentinfection ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.currentinfection}>
                <div>
                  <br />
                  <p>{t('Testing.Currentinfection.2')}</p>
                  <br />
                  <p>{t('Testing.Currentinfection.3')}<a href={t('Testing.Currentinfection.5')}>{t('Testing.Currentinfection.4')}</a>{t('Testing.Currentinfection.6')}</p>
                  <br />
                  <h4>{t('Testing.Currentinfection.7')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p>{t('Testing.Currentinfection.8')}</p>
                    <br />
                    <p>{t('Testing.Currentinfection.9')}</p>
                    <ul>
                      <li>{t('Testing.Currentinfection.10')}</li>
                      <li>{t('Testing.Currentinfection.11')}</li>
                      <li>{t('Testing.Currentinfection.12')}</li>
                      <li>{t('Testing.Currentinfection.13')}<a href={t('Testing.Currentinfection.15')}>{t('Testing.Currentinfection.14')}</a>{t('Testing.Currentinfection.16')}</li>
                      <li>{t('Testing.Currentinfection.17')}</li>
                    </ul>
                  </div>
                  <br />
                  <h4>{t('Testing.Currentinfection.18')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p><a target="_blank" href={t('Testing.Currentinfection.20')}>{t('Testing.Currentinfection.19')}</a>{t('Testing.Currentinfection.21')}</p>
                    <br />
                    <p>{t('Testing.Currentinfection.22')}</p>
                    <ul>
                      <li><strong>{t('Testing.Currentinfection.23')}</strong>{t('Testing.Currentinfection.24')}<a href={t('Testing.Currentinfection.26')}>{t('Testing.Currentinfection.25')}</a>{t('Testing.Currentinfection.27')}</li>
                      <li><strong>{t('Testing.Currentinfection.28')}</strong>{t('Testing.Currentinfection.29')}</li>
                      <ul>
                        <li>{t('Testing.Currentinfection.30')}</li>
                        <li>{t('Testing.Currentinfection.31')}</li>
                        <li>{t('Testing.Currentinfection.32')}</li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>

            <hr />

            <div id='pastinfection'>
              <h4 id='examp' onClick={() => { setOpen1({ pastinfection: !open1.pastinfection }) }} className={styles.medium_title} >{t('Testing.Pastinfection.1')}<br /><span className={styles.span}>{!open1.pastinfection ? t('Show more.2') : t('Show less.1')}</span></h4>
              <Collapse in={open1.pastinfection}>
                <div>
                  <br />
                  <p>{t('Testing.Pastinfection.2')}</p>
                  <p>{t('Testing.Pastinfection.3')}<a hreef={t('Testing.Pastinfection.5')}>{t('Testing.Pastinfection.4')}</a>{t('Testing.Pastinfection.6')}</p>
                  <br />
                  <p><strong>{t('Testing.Pastinfection.7')}<a href={t('Testing.Pastinfection.9')}>{t('Testing.Pastinfection.8')}</a>{t('Testing.Pastinfection.10')}</strong></p>
                  <p><strong>{t('Testing.Pastinfection.11')}</strong></p>
                  <br />
                  <h4>{t('Testing.Pastinfection.12')}</h4>
                  <br />
                  <div style={{ paddingLeft: '5%' }}>
                    <p><a target="_blank" href={t('Testing.Pastinfection.14')}>{t('Testing.Pastinfection.13')}</a>{t('Testing.Pastinfection.15')}</p>
                    <br />
                    <p>{t('Testing.Pastinfection.16')}</p>
                    <p>{t('Testing.Pastinfection.17')}</p>
                    <br />
                  </div>
                  <h4>{t('Testing.Pastinfection.18')}</h4>
                  <br />
                  <ol style={{ paddingLeft: '5%' }}>
                    <li className={styles.p}>{t('Testing.Pastinfection.19')}</li>
                    <br />
                    <ul>
                      <li>{t('Testing.Pastinfection.20')}</li>
                      <li>{t('Testing.Pastinfection.21')}</li>
                      <li>{t('Testing.Pastinfection.22')}</li>
                      <li>{t('Testing.Pastinfection.23')}<a href={t('Testing.Pastinfection.25')}>{t('Testing.Pastinfection.24')}</a>{t('Testing.Pastinfection.26')}</li>
                      <ul><li>{t('Testing.Pastinfection.27')}</li></ul>
                      <li>{t('Testing.Pastinfection.28')}</li>
                    </ul>
                    <br />
                    <li className={styles.p}>{t('Testing.Pastinfection.29')}</li>
                    <br />
                    <ul>
                      <li>{t('Testing.Pastinfection.30')}</li>
                      <li>{t('Testing.Pastinfection.31')}</li>
                      <ul>
                        <li>{t('Testing.Pastinfection.32')}</li>
                        <li>{t('Testing.Pastinfection.33')}</li>
                      </ul>
                    </ul>
                    <br />
                    <p>{t('Testing.Pastinfection.34')}<a href={t('Testing.Pastinfection.36')}>{t('Testing.Pastinfection.35')}</a>{t('Testing.Pastinfection.37')}</p>
                    <p>{t('Testing.Pastinfection.38')}<a href={t('Testing.Pastinfection.40')}>{t('Testing.Pastinfection.39')}</a>{t('Testing.Pastinfection.41')}</p>
                  </ol>
                </div>
              </Collapse>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}



export const AllWiki = (props) => {
  const { t } = useTranslation();
  const [translate, setTranslate] = useState();

  useEffect(() => {
    setTranslate(t('Translate.1'));
  }, [])

  return (
    <>
      <div style={{ width: '100%', paddingTop: '2%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <ul className="nav mb-3" role="tablist" >
            <li id={pathname === 'wiki/all' ? styles.blue : styles.white}>
              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => window.location.pathname = first_path + '/wiki/all'} role="tab"
                aria-controls="pills-home" aria-selected="true">{t('Every thing.1')}</a>
            </li>
            <li id={pathname === 'wiki/quick' ? styles.blue : styles.white}>
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => window.location.pathname = first_path + '/wiki/quick'} role="tab"
                aria-controls="pills-profile" aria-selected="false">{t('Quick.1')}</a>
            </li>
          </ul>
        </div>
      </div>
      <h1 style={{ paddingBottom: '2%', textAlign: 'center' }} onClick={() => {
        window.location.pathname = first_path + '/wiki/quick'
      }}>{t('Translate.2')}<span className={styles.a}><a>{t('Translate.3')}</a></span></h1>

      <div className={styles.div} >
        <ul style={{ paddingLeft: '0', marginLeft: '0' }}>

          <div id='what-is' className={styles.card_padding} style={{ paddingTop: '0', marginTop: '0' }}>
            <WhatIsCovid19 />
          </div>

          <div id='symptoms' className={styles.card_padding}>
            <Symptoms />
          </div>

          <div id='testing' className={styles.card_padding}>
            <Testing />
          </div>

          <div id='prevent-getting-sick' className={styles.card_padding}>
            <Protect />
          </div>

          <div id='if-you-are-sick' className={styles.card_padding}>
            <Sick />
          </div>

        </ul>
      </div>
    </>
  )
}

