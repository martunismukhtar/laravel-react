import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink
} from "react-router-dom";

function Header() {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto fw-normal"></p>
                <nav className="my-2 my-md-0 me-md-3">
                    <NavLink className="p-2 text-dark" to="/">Home</NavLink>
                    
                    <NavLink className="p-2 text-dark" to="/login">Login </NavLink>
                </nav>
                <a className="btn btn-outline-primary" href="/register">Sign up</a>
        </header>
        
    )
}

export default Header;