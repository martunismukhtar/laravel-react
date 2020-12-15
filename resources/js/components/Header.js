import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

function Header() {
    
    let getuser = useSelector(state => state);
    
    let welcome;
    if(getuser.isAuthenticated) {
        welcome = 'Welcome '+ getuser.user.name;
    } else {
        welcome = 'Home';
    }
    
    
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">{welcome}</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" 
                data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            {
                getuser.isAuthenticated ? (
                    <ul className="navbar-nav px-3" style={{display:'-webkit-box'}}>                
                        
                        <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                            <a className="nav-link" href="/reset-pwd">Reset Password</a>
                        </li>

                        <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                ) : (
                    <ul className="navbar-nav px-3" style={{display:'-webkit-box'}}>                
                        <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item text-nowrap" style={{paddingRight: '20px'}}>
                            <a className="nav-link" href="/login">Login</a>
                        </li>

                        
                    </ul>
                )
            }
            
            
          </nav>
        
    )
}

export default Header;