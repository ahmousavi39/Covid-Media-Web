import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Footer() {
  const { t } = useTranslation();

  return (

    <footer className="page-footer font-small unique-color-dark" style={{ paddingBottom: '4%', marginTop: '20%' }}>

      <div style={{ backgroundColor: '#6351ce' }}>
        <div className="container">


          <div className="row py-4 d-flex align-items-center">

            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">{t('Get connected.1')}</h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right">

              <a className="fb-ic" target="_blank" href='https://www.facebook.com/Covid-media-110057337452934/'>
                <i className="fab fa-facebook-f white-text mr-4" />
              </a>
              {/* <a className="tw-ic"> */}
              {/* <i className="fab fa-twitter white-text mr-4" /> */}
              {/* </a> */}
              <a className="li-ic" target="_blank" href='https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/'>
                <i className="fab fa-linkedin-in white-text mr-4" />
              </a>
              <a className="ins-ic" target="_blank" href='https://www.instagram.com/mr_code_09/?hl=el'>
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
              <a href="https://eimai.org" target='_blank'>EIMAI - Center For Emerging Young Leaders</a>
            </p>
            <p>
              <a href="https://www.facebook.com/Vodafoneshopargiroupolis/" target='_blank'>Vodafone Shop Αργυρούπολης</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 className="text-uppercase font-weight-bold">{t('footbar3.1')}</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <i className="fas fa-home mr-3" /> Budingen, Hessen, Germany</p>
            <p>
              <i className="fas fa-envelope mr-3" /> m.amirhossein2005@gmail.com</p>
            <p>
              <i className="fas fa-phone mr-3" /> +49 1636252607</p>
          </div>
        </div>
        <p style={{textAlign: 'center'}}>Design and managed by <a href="https://amirhossein.netlify.app"><strong>Amirhossein Mousavi</strong></a></p>

      </div>
    </footer>
  )
}