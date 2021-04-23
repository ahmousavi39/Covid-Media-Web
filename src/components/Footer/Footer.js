import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';


export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
       <div id="sncmp-banner" className="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" className="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" className="sncmp sncmp-banner-main"><div id="sncmp-banner-content" className="sncmp sncmp-banner-content"><div id="sncmp-banner-header" className="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" className="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" className="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" className="sncmp sncmp-banner-right"></div></div></div>
          
      <footer className="page-footer font-small unique-color-dark" style={{ paddingBottom: '4%', marginTop: '20%' }}>

        <div style={{ backgroundColor: '#6351ce' }}>
          <div className="container">


            <div className="row py-4 d-flex align-items-center">

              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">{t('Get connected.1')}</h6>
              </div>

              <div className="col-md-6 col-lg-7 text-center text-md-right">

                <a className="fb-ic" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/Covid-media-110057337452934/'>
                  <i className="fab fa-facebook-f white-text mr-4" />
                </a>
                {/* <a className="tw-ic"> */}
                {/* <i className="fab fa-twitter white-text mr-4" /> */}
                {/* </a> */}
                <a className="li-ic" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/'>
                  <i className="fab fa-linkedin-in white-text mr-4" />
                </a>
                <a className="ins-ic" target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mr_code_09/?hl=el'>
                  <i className="fab fa-instagram white-text" />
                </a>

              </div>

            </div>


          </div>
        </div>

        <div className="container text-center text-md-left mt-5">

          <div className="row mt-3" style={{ textAlign: "left" }}>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">{t('Covid media.1')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
              <p>{t('Covid media.2')}</p>

            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">{t('Sources.1')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
              <p>
                <a href="https://www.who.int">World Health Organization (WHO)</a>
              </p>
              <p>
                <a href="https://cdc.gov">CDC</a>
              </p>
              <p>
                <a href="https://www.worldometers.info">World Matters</a>
              </p>
              <p>
                <a href="https://systems.jhu.edu/">JHU CSSE</a>
              </p>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">{t('Sponsor.1')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
              <p>
                <a href="https://eimai.org" target='_blank' rel="noopener noreferrer">EIMAI - Center For Emerging Young Leaders</a>
              </p>
              <p>
                <a href="https://www.facebook.com/Vodafoneshopargiroupolis/" target='_blank' rel="noopener noreferrer">Vodafone Shop Αργυρούπολης</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase font-weight-bold">{t('footbar3.1')}</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
              <p>
                <i className="fas fa-home mr-3" /> Budingen, Hessen, Germany</p>
              <p>
                <i className="fas fa-envelope mr-3" id="email" /> m.amirhossein2005@gmail.com</p>
              <p>
                <i className="fas fa-phone mr-3" id="phone" /> +49 1636252607</p>
            </div>
          </div>
          <p style={{ textAlign: 'center' }}>Design and managed by <a href="https://amirhossein.netlify.app"><strong>Amirhossein Mousavi</strong></a></p>

        </div>
      </footer>
    </>
  )
}