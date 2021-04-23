import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Footer() {
  const { t } = useTranslation();

  const links = {
    color: "white",
    paddingLeft: "7%"
  }
  const links_d = {
    color: "white",
    paddingLeft: "4%"
  }

  const foo = {
    padding: "7%"
  }

  const text = {
    paddingLeft: "3%"
  }


  return (

<footer className="page-footer font-small unique-color-dark" style={{paddingBottom : '4%', marginTop: '20%'}}>

<div style={{backgroundColor: '#6351ce'}}>
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

  <div className="row mt-3" style={{textAlign : "left"}}>

    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

      <h6 className="text-uppercase font-weight-bold">{t('Covid media.1')}</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>{t('Covid media.2')}</p>

    </div>

    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

      <h6 className="text-uppercase font-weight-bold">{t('Sources.1')}</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>
        <a href="https://www.who.int">World Health Organization (WHO)</a>
      </p>
      <p>
        <a href="https://cdc.gov">CDC</a>
      </p>
      <p>
        <a href="https://www.worldometers.info">World Matters</a>
      </p>

    </div>

    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

      <h6 className="text-uppercase font-weight-bold">{t('Sponsor.1')}</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>
        <a href="https://eimai.org" target='_blank'>EIMAI - Center For Emerging Young Leaders</a>
      </p>
      <p>
        <a href="https://www.facebook.com/Vodafoneshopargiroupolis/" target='_blank'>Vodafone Shop Αργυρούπολης</a>
      </p>
    </div>

    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      <h6 className="text-uppercase font-weight-bold">{t('footbar3.1')}</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>
        <i className="fas fa-home mr-3" /> Greece, Athens</p>
      <p>
        <i className="fas fa-envelope mr-3" /> amirhossein@covidmediainfo.com</p>
      <p>
        <i className="fas fa-phone mr-3" /> +30 694 8561474</p>
      {/* <p>
        <i className="fas fa-print mr-3" /> + 01 234 567 89</p> */}
    </div>

  </div>

</div>










{/* <div>

<footer class="footer bg-dark text-white" style={{ marginTop: '25%' }}>



  <div style={foo} >
    <div class="row">


      <div class="col-md-3 col-lg-4 col-xl-3">
        <h4>{t('footbar1.1')}</h4>
        <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
        <p style={{ paddingLeft: "3%" }}>
          {t('footbar1.2')} <a href="https://socialhackersacademy.org/">{t('footbar1.3')}</a>{t('footbar1.4')}
        </p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-3">
        <h4>{t('Sources.1')}</h4>
        <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
        <br />
        <p style={text}>World Health Organization (WHO)</p>
        <p style={text}>CDC</p>
      </div>



      <div class="col-md-3 col-lg-2 col-xl-3">
        <h4>{t('Special thanks.1')}</h4>
        <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
        <br />
        <p style={text}>Social Hackers Academy</p>
        <p style={text}>EIMAI</p>
        <p style={text}>Ellen Froustis</p>
        <p style={text}>Maria Pashalidou</p>
        <p style={text}>Mohammad Sadegh Mousavi</p>
        <p style={text}>Sara Mousavi</p>
      </div>



      <div class="col-md-4 col-lg-3 col-xl-3">

        <h4>{t('footbar3.1')}</h4>

        <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />

        <p><i class="fa fa-home mr-3" /><span style={links_d}>Greece,Athens</span></p>

        <p> <i class="fa fa-envelope mdb-gallery-view-icon " id="email" />
          <a target="_blank" style={links} href="mailto:mosaviamirhoseyn9@gmail.com">mosaviamirhoseyn9@gmail.com</a></p>

        <p> <i class="fab fa-linkedin mdb-gallery-view-icon" />
          <a target="_blank" style={links} href="https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/">Linkedin</a></p>

        <p> <i class="fa fa-phone" />
          <a target="_blank" style={links} href="tel:+30 694 8561474">Phone</a></p>

        <p> <i class="fab fa-facebook-f" />
          <a target="_blank" style={links} href="https://www.facebook.com/amirhoseyn.mosavi.1/"> Facebook</a></p>

        <p> <i class="fab fa-instagram mdb-gallery-view-icon" />
          <a target="_blank" style={links} href="https://www.instagram.com/mr_code_09/?hl=el">Instagram</a></p>

      </div>

      <div class="col-md-3 col-lg-2 col-xl-3">
        <h4>{t('Sponsor.1')}</h4>
        <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
        <br />
        <p style={text}>EIMAI - Center For Emerging Young Leaders</p>
        <p style={text}>Videophone Argyrouplos</p>
      </div>

    </div>
  </div>
</footer>


</div>

 */}





</footer>
  )
}