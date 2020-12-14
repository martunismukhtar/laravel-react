import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};

function Routes (){
    return (
        <Router>
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal">Company name</p>
                <nav className="my-2 my-md-0 me-md-3">
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    <Link className="p-2 text-dark" to="/dashboard">Dashboard</Link>
                       
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </header>
        </Router>
        
    )
}

export default Routes;