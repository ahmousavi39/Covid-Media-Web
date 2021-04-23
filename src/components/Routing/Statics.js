import { fetchData, fetchHistoricalData, fetchVacineData, fetchVaccineCountries } from '../../api';
import { Cards, CountryPicker, HistoricalData, Chart, HistoricalVaccine, VaccineCountries, RaceChart } from '../../components';
import React from 'react';
import styles from './Style.module.css';

var pathname = window.location.pathname;
pathname = pathname.replace(/^\/[\w\d]+\//, '');

var lan = window.location.pathname;
lan.indexOf(1);
lan.toLowerCase();
lan = lan.split("/")[1];

var coun = window.location.pathname;
coun.indexOf(1);
coun.toLowerCase();
coun = coun.split("/")[4];


var isDaily = window.location.pathname;
isDaily.indexOf(1);
isDaily.toLowerCase();
isDaily = isDaily.split("/")[3];


export class Statics extends React.Component {
  state = {
    data: {},
    historicalDataState: [],
    vaccineData: {},
    historicalDataVaccine: [],
    vaccineDataCountries: {},
    country: coun == undefined ? '' : coun,
    isDaily: this.props.isDaily,
    openChart: 'Historical'
  }

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    const fetchedHistoricalData = await fetchHistoricalData(this.state.country);
    const fetchedVacineData = await fetchVacineData(this.state.country);
    const fetchedVaccineCountries = await fetchVaccineCountries(this.state.country);
    this.setState({ data: fetchedData, historicalDataState: fetchedHistoricalData, vaccineData: fetchedVacineData, historicalDataVaccine: fetchedVacineData.allDaysCases, vaccineDataCountries: fetchedVaccineCountries });
  }


  handleCountryChange = async (country) => {
    window.location.pathname = lan + '/statics/' + isDaily + '/' + country;
  }

  render() {
    const { data, country, historicalDataVaccine, historicalDataState, vaccineDataCountries } = this.state;
    if (!this.state.isDaily) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >

          <div style={{ width: '100%', paddingTop: '2%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <ul className="nav mb-3" role="tablist" >
                <li id={!this.props.isDaily ? styles.blue : styles.white}>
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => window.location.pathname = lan + '/statics/all/' + this.state.country} role="tab"
                    aria-controls="pills-home" aria-selected="true">{this.props.total}</a>
                </li>
                <li id={this.props.isDaily ? styles.blue : styles.white}>
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => window.location.pathname = lan + '/statics/today/' + this.state.country} role="tab"
                    aria-controls="pills-profile" aria-selected="false">{this.props.today}</a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ maxWidth: "1140px" }}>
            <Cards isDaily={this.state.isDaily} data={data} vaccineData={this.state.vaccineData} />
          </div>

          <CountryPicker country={country} handleCountryChange={this.handleCountryChange} />

          <div style={{ width: '100%', paddingTop: '2%', paddingBottom: '3%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <ul className="nav mb-3" role="tablist" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>

                <li id={this.state.openChart === 'Historical' ? styles.blue : styles.white}>
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={() => this.setState({ openChart: 'Historical' })} role="tab"
                  aria-controls="pills-home" aria-selected="true">{this.props.chartTypes.historical}</a>
              </li>

              <li id={this.state.openChart === 'Vaccine Historical' ? styles.blue : styles.white}>
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={() => this.setState({ openChart: 'Vaccine Historical' })} role="tab"
                  aria-controls="pills-profile" aria-selected="false">{this.props.chartTypes.historicalVaccine}</a>
              </li>

              <li id={this.state.openChart === 'Vaccine' ? styles.blue : styles.white}>
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={() => this.setState({ openChart: 'Vaccine' })} role="tab"
                  aria-controls="pills-profile" aria-selected="false">{this.props.chartTypes.vaccine}</a>
              </li>
              <div className={styles.mobileButtons}>
                <li id={this.state.openChart === 'Bar Chart' ? styles.blue : styles.white}>
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={() => this.setState({ openChart: 'Bar Chart' })} role="tab"
                    aria-controls="pills-profile" aria-selected="false">{this.props.chartTypes.barChart}</a>
                </li>

                <li id={this.state.openChart === 'Covid History' ? styles.blue : styles.white}>
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={() => this.setState({openChart : 'Covid History'})} role="tab"
                    aria-controls="pills-profile" aria-selected="false">{this.props.chartTypes.covidHistory}</a>
                </li>
              </div>
              </ul>
          </div>
        </div>


          { this.state.openChart === 'Historical' ? <HistoricalData data={historicalDataState} /> : this.state.openChart === 'Vaccine Historical' ? <HistoricalVaccine vaccineData={historicalDataVaccine} /> : this.state.openChart === 'Vaccine' ? <VaccineCountries vaccineDataCountries={vaccineDataCountries} /> : this.state.openChart === "Bar Chart" ? <Chart isDaily={this.state.isDaily} data={data} country={country} vaccineData={this.state.vaccineData} /> : this.state.openChart === 'Covid History' ? <RaceChart data={historicalDataState} /> : <p></p> }

        </div >
      )
    } else {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
          <div style={{ width: '100%', paddingTop: '2%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <ul className="nav mb-3" role="tablist" >
                <li id={!this.props.isDaily ? styles.blue : styles.white}>
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={(e) => window.location.pathname = `${lan}/statics/all/${this.state.country}`} role="tab"
                    aria-controls="pills-home" aria-selected="true">{this.props.total}</a>
                </li>
                <li id={this.props.isDaily ? styles.blue : styles.white}>
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={(e) => window.location.pathname = `${lan}/statics/today/${this.state.country}`} role="tab"
                    aria-controls="pills-profile" aria-selected="false">{this.props.today}</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ maxWidth: "1140px" }}>
            <Cards isDaily={this.state.isDaily} data={data} vaccineData={this.state.vaccineData} />
          </div>
          <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
          <Chart isDaily={this.state.isDaily} data={data} country={country} vaccineData={this.state.vaccineData} />
        </div>
      )
    }
  }
}