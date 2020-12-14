import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink
} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" 
                data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <ul className="navbar-nav px-3" style={{display:'-webkit-box'}}>
                <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                <a className="nav-link" href="/reset-pwd">Reset Password</a>
              </li>
              <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                <a className="nav-link" href="/logout">Sign out</a>
              </li>
            </ul>
          </nav>
        
    )
}

export default Header;