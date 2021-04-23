import React, { Component, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { Cards, Chart, CountryPicker, Map, Navigation, Footer} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact, Wiki, About , Critical, Refugees} from "./components/Routing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga";
import { makeStyles } from '@material-ui/core/styles';

function initizeAnalytics() {
  ReactGA.initialize('UA-168910705-1')
  ReactGA.pageview('/')
}


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2), 
  },
}));

export class Render extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state;
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

        <Cards isDaily={this.state.isDaily} data={data} />
        <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
        <Chart isDaily={this.state.isDaily} data={data} country={country} />
      </div>
    )
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
    <div>
      <div className={styles.container}>
        <img id="top" className={styles.image} src={t('logo.1')} />
      </div>
      <Router >
        <br />
        <div className="container">
          <Navigation />
        </div>
        <Switch>
          <Route path="/en/about">
            <About />
          </Route>
          <Route path="/per/about">
            <About />
          </Route>
          <Route path="/tr/about">
            <About />
          </Route>
          <Route path="/gr/about">
            <About />
          </Route>
          <Route path="/about">
            <Change1 />
          </Route>



          <Route path="/wiki">
            <Change1 />
          </Route>
          <Route path="/en/wiki">
            <Wiki />
          </Route>
          <Route path="/tr/wiki">
            <Wiki />
          </Route>
          <Route path="/gr/wiki">
            <Wiki />
          </Route>
          <Route path="/per/wiki">
            <Wiki />
          </Route>


          <Route path="/contact">
            <Change1 />
          </Route>
          <Route path="/en/contact">
            <Contact />
          </Route>
          <Route path="/tr/contact">
            <Contact />
          </Route>
          <Route path="/gr/contact">
            <Contact />
          </Route>
          <Route path="/per/contact">
            <Contact />
          </Route>

          <Route path="/map">
            <Change1 />
          </Route>
          <Route path="/en/map">
            <Map />
          </Route>
          <Route path="/per/map">
            <Map />
          </Route>
          <Route path="/gr/map">
            <Map />
          </Route>
          <Route path="/tr/map">
            <Map />
          </Route>

          <Route path="/statics">
          <Change1 />          
          </Route>
          <Route path="/en/statics">
          <Render total={t('Total.1')} today={t('Today.1')} />          
          </Route>
          <Route path="/per/statics">
          <Render total={t('Total.1')} today={t('Today.1')} />          
          </Route>
          <Route path="/gr/statics">
          <Render total={t('Total.1')} today={t('Today.1')} />          
          </Route>
          <Route path="/tr/statics">
          <Render total={t('Total.1')} today={t('Today.1')} />          
          </Route>

          <Route path="/critical">
          <Change1 />          
          </Route>
          <Route path="/en/critical">
          <Critical />          
          </Route>
          <Route path="/per/critical">
          <Critical />          
          </Route>
          <Route path="/gr/critical">
          <Critical />          
          </Route>
          <Route path="/tr/critical">
          <Critical />          
          </Route>


          <Route path="/refugees">
          <Change1 />          
          </Route>
          <Route path="/en/refugees">
          <Refugees />          
          </Route>
          <Route path="/per/refugees">
          <Refugees />          
          </Route>
          <Route path="/gr/refugees">
          <Refugees />          
          </Route>
          <Route path="/tr/refugees">
          <Refugees />          
          </Route>


          <Route path="/en">
            <Render total={t('Total.1')} today={t('Today.1')}  />
          </Route>
          <Route path="/per">
            <Render total={t('Total.1')} today={t('Today.1')}  />
          </Route>
          <Route path="/tr">
            <Render total={t('Total.1')} today={t('Today.1')}  />
          </Route>
          <Route path="/gr">
            <Render total={t('Total.1')} today={t('Today.1')}  />
          </Route>
          <Route exact path="/">
          <Change />
          </Route>

        </Switch>
        <div id="sncmp-banner" class="sncmp sncmp-banner" ><div id="sncmp-banner-wrapper" class="sncmp sncmp-banner-wrapper"><div id="sncmp-banner-main" class="sncmp sncmp-banner-main"><div id="sncmp-banner-content" class="sncmp sncmp-banner-content"><div id="sncmp-banner-header" class="sncmp sncmp-banner-header"><div id="sncmp-banner-heading" class="sncmp sncmp-banner-heading"> </div></div><div id="sncmp-banner-desc" class="sncmp sncmp-banner-desc">
        {t('Banner.1')}<NavLink to="/critical"><b>{t('Banner.2')}</b></NavLink>{t('Banner.3')}<br />
  {t('Banner.4')}<b>{t('Banner.5')}</b>{t('Banner.6')}<b>{t('Banner.7')}</b>{t('Banner.8')}<strong><a className={styles.number} href={t('If you are sick.Caring.37.3')}>{t('If you are sick.Caring.37.2')}</a></strong>{t('Banner.9')}
          </div></div></div><div id="sncmp-banner-right" class="sncmp sncmp-banner-right"></div></div></div>
      <Footer />
      </Router>
    </div>
  );
}

