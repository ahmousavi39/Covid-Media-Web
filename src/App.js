import React from 'react';
import { Map, Navigation, Footer, OnlyMap } from './components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact, About, Critical, ContactApp, EnVaccine, Statics, QuickWiki, AllWiki } from "./components/Routing"
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga";

function initizeAnalytics() {
  ReactGA.initialize('UA-168910705-1')
  ReactGA.pageview('/')
}

const Change = () => {
  window.location.pathname = '/en/statics/all';
  return;
}

const RedirectToStatics = ({lan}) => {
  window.location.pathname = lan + '/statics/all';
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

        {/* Redirect to the statics page */}
        <Route exact path="/en">
          <RedirectToStatics lan='en' />
        </Route>

        <Route exact path="/per">
          <RedirectToStatics lan='per' />
        </Route>

        <Route exact path="/tr">
          <RedirectToStatics lan='tr'/>
        </Route>

        <Route exact path="/gr" lan='gr'>
          <RedirectToStatics lan='tr' />
        </Route>


        {/* For the mobile app */}
        <Route path="/en/app/map/only">
          <OnlyMap />
        </Route>

        <Route path="/en/app/contact/only">
          <ContactApp />
        </Route>


        {/* About page */}
        <Route path="/about">
          <Change1 />
        </Route>

        <Route path="/en/about">
            <Navigation />
          <About />
          <Footer />
        </Route>

        <Route path="/per/about">
            <Navigation />
          <About />
          <Footer />
        </Route>

        <Route path="/tr/about">
            <Navigation />
          <About />
          <Footer />
        </Route>

        <Route path="/gr/about">
            <Navigation />
          <About />
          <Footer />
        </Route>


        {/* Wiki page */}
        <Route path="/wiki/all">
          <Change1 />
        </Route>

        <Route path="/wiki/quick">
          <Change1 />
        </Route>

        <Route path="/en/wiki/all">
            <Navigation />
          <AllWiki />
          <Footer />
        </Route>

        <Route path="/en/wiki/quick">
            <Navigation />
          <QuickWiki />
          <Footer />
        </Route>

        <Route path="/tr/wiki/all">
            <Navigation />
          <AllWiki />
          <Footer />
        </Route>

        <Route path="/tr/wiki/quick">
            <Navigation />
          <QuickWiki />
          <Footer />
        </Route>

        <Route path="/gr/wiki/all">
            <Navigation />
          <QuickWiki />
          <Footer />
        </Route>

        <Route path="/gr/wiki/quick">
            <Navigation />
          <QuickWiki />
          <Footer />
        </Route>

        <Route path="/per/wiki/all">
            <Navigation />
          <AllWiki />
          <Footer />
        </Route>

        <Route path="/per/wiki/quick">
            <Navigation />
          <QuickWiki />
          <Footer />
        </Route>

        {/* Contact page */}
        <Route path="/contact">
          <Change1 />
        </Route>

        <Route path="/en/contact">
            <Navigation />
          <Contact />
          <Footer />
        </Route>

        <Route path="/tr/contact">
            <Navigation />
          <Contact />
          <Footer />
        </Route>

        <Route path="/gr/contact">
            <Navigation />
          <Contact />
          <Footer />
        </Route>

        <Route path="/per/contact">
            <Navigation />
          <Contact />
          <Footer />
        </Route>


        {/* Map page */}
        <Route path="/map">
          <Change1 />
        </Route>

        <Route path="/en/map">
            <Navigation />
          <Map />
          <Footer />
        </Route>

        <Route path="/per/map">
            <Navigation />
          <Map />
          <Footer />
        </Route>

        <Route path="/gr/map">
            <Navigation />
          <Map />
          <Footer />
        </Route>

        <Route path="/tr/map">
            <Navigation />
          <Map />

          <Footer />
        </Route>


        {/* Statics page */}
        <Route path="/statics/all">
          <Change1 />
        </Route>

        <Route path="/statics/today">
          <Change1 />
        </Route>

        <Route path={`/en/statics/today`}>
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={true}/>
          <Footer />
        </Route>

        <Route path="/per/statics/today">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={true}/>
          <Footer />
        </Route>

        <Route path="/gr/statics/today">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={true}/>
          <Footer />
        </Route>

        <Route path="/tr/statics/today">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={true} />
          <Footer />
        </Route>

        <Route path="/en/statics/all">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={false} />
          <Footer />
        </Route>

        <Route path="/tr/statics/all">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={false} />
          <Footer />
        </Route>

        <Route path="/per/statics/all">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={false} />
          <Footer />
        </Route>

        <Route path="/gr/statics/all">
            <Navigation />
          <Statics total={t('Total.1')} today={t('Today.1')} isDaily={false} />
          <Footer />
        </Route>


        {/* Critical page */}
        <Route path="/critical">
          <Change1 />
        </Route>

        <Route path="/en/critical">
            <Navigation />
          <Critical />
          <Footer />
        </Route>

        <Route path="/per/critical">
            <Navigation />
          <Critical />
          <Footer />
        </Route>

        <Route path="/gr/critical">
            <Navigation />
          <Critical />
          <Footer />
        </Route>

        <Route path="/tr/critical">
            <Navigation />
          <Critical />
          <Footer />
        </Route>


        {/* Vaccine page */}
        <Route path="/vaccine">
          <Change1 />
        </Route>

        <Route path="/en/vaccine">
            <Navigation />
          <EnVaccine />
          <Footer />
        </Route>

        <Route path="/per/vaccine">
            <Navigation />
          <EnVaccine />
          <Footer />
        </Route>

        <Route path="/gr/vaccine">
            <Navigation />
          <EnVaccine />
          <Footer />
        </Route>

        <Route path="/tr/vaccine">
            <Navigation />
          <EnVaccine />
          <Footer />
        </Route>

        <Route exact path="/">
          <Change />
        </Route>
      </Switch>
    </Router>
  );
}

