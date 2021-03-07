import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { NavLink } from 'react-router-dom';
import Donate from '../Donate/Donate'

export default function Navigation() {

  const [state, setState] = useState(null);
  const { t } = useTranslation();

  var first_path = window.location.pathname;

  first_path.indexOf(1);

  first_path.toLowerCase();

  first_path = first_path.split("/")[1];


  function onLangChange(e) {

    var pathname_all = window.location.pathname;

    var pathname = window.location.pathname;

    pathname = pathname.replace(/^\/[\w\d]+\//, '');

    if(pathname_all == '/per' || pathname_all == '/en' || pathname_all == '/gr' || pathname_all == '/tr' ){
      window.location.pathname = e.target.value;
    }
    else{
      window.location.pathname = e.target.value + '/' + pathname;
    }

  }

  return (
    <Navbar bg='dark' expand="lg" class={styles.topnav} >
      <Navbar.Toggle style={{ color: 'white' }} aria-controls="basic-navbar-nav"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg> {t('Menu.1')} </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>

          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" id="home" to={'/' + first_path + '/'}>
              {t('Statics.1')}
            </NavLink>
          </div>

          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" to={'/' + first_path + '/map'}>
              {t('Map.1')}
            </NavLink>
          </div>

          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" to={'/' + first_path + '/wiki'}>
              {t("Wiki.1")}
            </NavLink>
          </div>
{/* 
          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" to={'/' + first_path + '/refugees'}>
              {t("Refugees.1")}
            </NavLink>
          </div> */}

          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" to={'/' + first_path + '/contact'}>
              {t("Contact.1")}
            </NavLink>
          </div>

          <div class="navbar-nav" data-target=".navbar-collapse" data-toggle="collapse">
            <NavLink className="d-inline p-2 bg-dark text-white" to={'/' + first_path + '/about'}>
              {t('About.1')}
            </NavLink>
          </div>

          <div style={{ position: "right" }} className={styles.lann}>

            <Donate />

          </div>

        
          <div style={{ position: "right" }} className={styles.lan}>
            <select value={first_path} onChange={onLangChange} className="d-inline p-2 bg-dark text-white" >
              <option value="en">English</option>
              <option value="per">فارسی</option>
              <option value="tr">Türkçe</option>
              <option value="gr">Ελληνικά</option>
              {/* <option value="ar">عربى</option> */}
            </select>
          </div>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}