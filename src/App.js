import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cards, CountryPicker, Map, Navigation, Footer } from './components';
import { HistoricalData, Chart } from './components';
import styles from './App.module.css';
import { fetchData, fetchHistoricalData } from './api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact, Wiki, About, Critical, Refugees } from "./components/Routing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga";



function initizeAnalytics() {
  ReactGA.initialize('UA-168910705-1')
  ReactGA.pageview('/')
}


export class Render extends React.Component {
  state = {
    data: {},
    historicalDataState: [],
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedHistoricalData = await fetchHistoricalData();
    this.setState({ data: fetchedData, historicalDataState: fetchedHistoricalData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const fetchedHistoricalData = await fetchHistoricalData(country);
    this.setState({ data: fetchedData, historicalDataState: fetchedHistoricalData });
  }
  render() {
    const { data, country, historicalDataState } = this.state;
    if (!this.state.isDaily) {
      return (
        <div className={styles.container}>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ textAlign: 'center', marginTop: '3%' }}>
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => this.setState({ isDaily: false })} role="tab"
                aria-controls="pills-home" aria-selected="true">{this.props.total}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => this.setState({ isDaily: true })} role="tab"
                aria-controls="pills-profile" aria-selected="false">{this.props.today}</a>
            </li>
          </ul>
        <div style={{  maxWidth: "1140px"}}>
          <Cards isDaily={this.state.isDaily} data={data} />
          </div>
          <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
          <HistoricalData data={historicalDataState} />

          <br />
          <Chart isDaily={this.state.isDaily} data={data} country={country} />

        </div>
      )
    } else {
      return (
        <div className={styles.container} >
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ textAlign: 'center', marginTop: '3%' }}>
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => this.setState({ isDaily: false })} role="tab"
                aria-controls="pills-home" aria-selected="true">{this.props.total}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => this.setState({ isDaily: true })} role="tab"
                aria-controls="pills-profile" aria-selected="false">{this.props.today}</a>
            </li>
          </ul>

          <Cards isDaily={this.state.isDaily} data={data} />
          <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
          <Chart isDaily={this.state.isDaily} data={data} country={country} />
        </div>
      )
    }
  }
}


const Change = () => {
  window.location.pathname = '/en';
  return;
}

const Change1 = () => {

  var pathname = window.location.pathname;

  pathname = pathname.replace(/^\/[\w\d]+\//, '');

  window.location.pathname = 'en' + pathname;
}



export default function App() {

  const { t } = useTranslation();
  initizeAnalytics();

  return (
    <Router >
      <Switch>
      <Route path="/en/app/map/only">
          <Map />
        </Route>
        <Route path="/en/about">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <About />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/about">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <About />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/about">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <About />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/about">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <About />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/about">
          <Change1 />
        </Route>


        <Route path="/wiki">
          <Change1 />
        </Route>


        <Route path="/en/wiki">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Wiki />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/wiki">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Wiki />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/wiki">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Wiki />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/wiki">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Wiki />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/contact">
          <Change1 />
        </Route>


        <Route path="/en/contact">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Contact />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/contact">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Contact />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/contact">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Contact />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/contact">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Contact />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/map">
          <Change1 />
        </Route>


        <Route path="/en/map">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Map />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/map">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Map />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/map">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Map />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/map">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Map />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/statics">
          <Change1 />
        </Route>


        <Route path="/en/statics">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/statics">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/statics">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/statics">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>

        <Route path="/critical">
          <Change1 />
        </Route>


        <Route path="/en/critical">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Critical />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/critical">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Critical />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/critical">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Critical />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/critical">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Critical />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/refugees">
          <Change1 />
        </Route>


        <Route path="/en/refugees">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Refugees />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per/refugees">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Refugees />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr/refugees">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Refugees />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr/refugees">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Refugees />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/en">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/per">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/tr">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route path="/gr">
          <div className={styles.container}>
            <img id="top" className={styles.image} src={t('logo.1')} />
          </div>
          <br />
          <div className="container">
            <Navigation />
          </div>
          <Render total={t('Total.1')} today={t('Today.1')} />
          <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
            {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
            {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
          <Footer />
        </Route>


        <Route exact path="/">
          <Change />
        </Route>
      </Switch>
    </Router>
  );
}

