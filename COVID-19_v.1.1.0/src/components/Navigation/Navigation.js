import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';


export function Navigation (){   
     const [t,i18n] = useTranslation();
         function handleLan(lang){
          i18n.changeLanguage('en-US')
        }
    
        return(
    <Navbar bg='dark' expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Home
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/wiki">
                        Wiki
                    </NavLink>
                     <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
                        Contact
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
                         About
                    </NavLink>
                    <Nav onClick={() => handleLan('en')} className="d-inline p-2 bg-dark text-white">
                         En
                    </Nav>
                    <button onClick={() => handleLan('per')} className="d-inline p-2 bg-dark text-white">
                         per
                    </button>
                    <button onClick={() => handleLan('tr')} className="d-inline p-2 bg-dark text-white">
                         tr
                    </button>
                    <button onClick={() => handleLan('gr')} className="d-inline p-2 bg-dark text-white">
                         gr
                    </button>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
        )}