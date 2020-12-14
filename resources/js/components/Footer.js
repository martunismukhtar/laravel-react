import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink
} from "react-router-dom";

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                
                <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
              </div>
              <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="link-secondary" href="#">Cool stuff</a></li>
                  <li><a className="link-secondary" href="#">Random feature</a></li>
                  <li><a className="link-secondary" href="#">Team feature</a></li>
                  <li><a className="link-secondary" href="#">Stuff for developers</a></li>
                  <li><a className="link-secondary" href="#">Another one</a></li>
                  <li><a className="link-secondary" href="#">Last time</a></li>
                </ul>
              </div>
              
            </div>
          </footer>
        
    )
}

export default Footer;