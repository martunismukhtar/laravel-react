import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from './Header';

import Login from "./Pages/Login";

import Register from "./Pages/Register";

import InfoVerifyEmail from "./Pages/InfoVerifyEmail";


import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import VerifyEmail from "./Pages/VerifyEmail";

import PrivateRoute from './PrivateRoute';

import Sidebar from '../components/Sidebar';

import Dashboard from "../components/Pages/Dashboard";
import My from "../components/Pages/My";

import Logout from "../components/Pages/Logout";
import sendEmailResetPwd from '../components/Pages/sendEmailResetPwd'
import resetPasswordForm from '../components/Pages/resetPasswordForm';

import { useSelector } from 'react-redux';

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const Page404 = ({ location }) => (
   <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
   </div>
);

function Content() {
    
    let getuser = useSelector(state => state);
    return (
            <div>
                <Header />
                <div className="container-fluid">
                     <div className="row">
                        {
                            getuser.isAuthenticated && (<Sidebar />)
                        }
                        
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/login" render={()=>
                                getuser.isAuthenticated ? <Redirect to="/login" />: <Login />
                            }></Route>

                            <Route exact path="/register" component={Register}></Route>
                            <PrivateRoute exact path="/home" component={Dashboard}></PrivateRoute>
                            <PrivateRoute exact path="/my" component={My}></PrivateRoute>
                            <PrivateRoute exact path="/reset-pwd" component={sendEmailResetPwd}></PrivateRoute>

                            <PrivateRoute exact path="/verify/:id" component={VerifyEmail}></PrivateRoute>

                            <Route exact path="/attemp-verify-email" component={InfoVerifyEmail}></Route>

                            <PrivateRoute exact path="/reset-password-form/:str" component={resetPasswordForm}></PrivateRoute>
                            <PrivateRoute exact path="/logout" component={Logout}></PrivateRoute>
                            <Route component={NotFound} />    
                        </Switch>
                     </div>     
                 </div>
            </div>
                
            
        )
    
}

export default Content;
