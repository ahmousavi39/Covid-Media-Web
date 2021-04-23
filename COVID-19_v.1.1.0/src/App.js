import React,{Component, useState} from 'react';
import { Cards , Chart , CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Contact, Wiki, About} from "./components/Routing"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



export class Render extends React.Component {
  state = {
  data : {},
  country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) => {
    console.log('app country' , country)
  const fetchedData = await fetchData(country);

  this.setState({ data: fetchedData, country : country})
  }


 render(){
   const { data , country} = this.state;
   console.log('stateeee',this.props);
  

   return(
     <div className={styles.container}>
       <Cards con={this.props} data={data}/>
       <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
       <Chart data={data} country={country}/>
     </div>
  
   )
 }
}




export default function App() { 

  const [state,setState] = useState(null);
  const { t } = useTranslation();




  function onLangChange (e){
    handleLan(e.target.value)
  }


  function handleLan(lang) {
    i18next.changeLanguage(lang);
    setState(lang)
  } 
  const all = [];



  function Navigation (){   
    return(
  <Navbar bg='dark' expand="lg" >
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" id="home" to="/">
                    {t('Home.1')}
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/wiki">
                    {t("Wiki.1")}
                </NavLink>
                 <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
                    {t("Contact.1")}
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
                     {t('About.1')}
                </NavLink>
                <select value={state} onChange={onLangChange} className="d-inline p-2 bg-dark text-white" >
                  <option value="en">English</option>
                  <option value="per">فارسی</option>
                  <option value="tr">Türkçe</option>
                  <option value="gr">Ελληνικά</option>
                </select>

            </Nav>  
        </Navbar.Collapse>
  </Navbar>
    )}



  return (
        <Router > 
      <div className={styles.container}>
      <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" />
      <br />
      </div>
      <div className="container">
        <Navigation />  
        
      </div>
        <Switch> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/wiki">
            <Wiki Img1={t('Img.1')} Img2={t('Img.2')} Img3={t('Img.3')} Img4={t('Img.4')} Img5={t('Img.5')} Img6={t('Img.6')} Img7={t('Img.7')} Img8={t('Img.8')} Img9={t('Img.9')} Img10={t('Img.10')} Img11={t('Img.11')}  video1={t('Video.1')} video2={t('Video.2')} title1={t('Title.1')} title2={t('Title.2')} title3={t('Title.3')} title4={t('Title.4')} title5={t('Title.5')} title6={t('Title.6')} title7={t('Title.7')} title8={t('Title.8')} title9={t('Title.9')} title10={t('Title.10')} title11={t('Title.11')}  Symptoms1={t('Symptoms.1')} Symptoms2={t('Symptoms.2')} Symptoms3={t('Symptoms.3')} Symptoms4={t('Symptoms.4')} Symptoms5={t('Symptoms.5')} Symptoms6={t('Symptoms.6')} Symptoms7={t('Symptoms.7')} Symptoms8={t('Symptoms.8')} Symptoms9={t('Symptoms.9')} Symptoms10={t('Symptoms.10')} Symptoms11={t('Symptoms.11')}/>
          </Route>
          <Route path="/contact">
            <Contact a1={t('Contactus.1')} a2={t('Contactus.2')} a3={t('Contactus.3')} a4={t('Contactus.4')} a5={t('Contactus.5')} a6={t('Contactus.6')} a7={t('Contactus.7')} a8={t('Contactus.8')} a9={t('Contactus.9')} a10={t('Contactus.10')} a11={t('Contactus.11')}  />
          </Route>
          <Route path="/">
            <Render con={t('con.1')} rec={t('rec.1')} dea={t('dea.1')} />
          </Route>
        </Switch>
        <footer class="footer bg-dark text-white" style={{marginTop : '25%'}}>
        <div class="container pt-5 pb-2">
            <div class="row">

                <div class="col-md-3 col-lg-4 col-xl-3">
                    <h4>Developed by Amirhossein</h4>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                    <p>
                    I'm a middle school student,
                    I've studied Full Stack Development on <a href="https://socialhackersacademy.org/">Social Hackers Academy</a>.
                    </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
                    <h4>Pages</h4>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                    <p><a href="/" class="text-white">{t('Home.1')}</a></p>
                    <p><a href="/about" class="text-white">{t('About.1')}</a></p>
                    <p><a href="/wiki" class="text-white">{t('Contact.1')}</a></p>
                    <p><a href="/contact" class="text-white">{t('Wiki.1')}</a></p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3" id={styles.footer}>
                    <h4>Contact</h4>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                    <p><i class="fa fa-home mr-3"/> Greece,Athens</p>
                    <p><i class="fa fa-envelope mr-3" id="email"/> mosaviamirhoseyn9@gmail.com</p>
                    <p><i class="fa fa-phone mr-3" id="phone"/> +30 694 8561474</p>
                    <p> <i class="fab fa-linkedin mdb-gallery-view-icon"/>
                    <a target="_blank" style={{paddingLeft : "7%"}} href="https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/">Linkedin</a></p>
                    <p> <i class="fab fa-facebook-f" />
                    <a target="_blank" style={{paddingLeft : "7%"}} href="https://www.facebook.com/amirhoseyn.mosavi.1/"> Facebook</a></p>
                    <p> <i class="fab fa-instagram mdb-gallery-view-icon"/>
                    <a target="_blank" style={{paddingLeft : "7%"}} href="https://www.instagram.com/mr_code_09/?hl=el">Instagram</a></p>

                </div>

            </div>
        </div>
        </footer>
</Router> 
  );
}

