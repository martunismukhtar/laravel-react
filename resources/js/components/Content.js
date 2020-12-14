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
import Footer from './Footer';

import Login from "./Pages/Login";

import Register from "./Pages/Register";

import Produk from "./Pages/Produk";
import hasilRedux from "./Pages/hasilRedux";
import InfoVerifyEmail from "./Pages/InfoVerifyEmail";


import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import VerifyEmail from "./Pages/VerifyEmail";

import PrivateRoute from './PrivateRoute';
import NormalRoute from './NormalRoute';

import Headerauth from '../components/Pages/authpage/Header';
import Sidebar from '../components/Pages/authpage/Sidebar';
import Dashboard from "../components/Pages/authpage/Dashboard";
import My from "../components/Pages/authpage/My";
import Logout from "../components/Pages/authpage/Logout";
import sendEmailResetPwd from '../components/Pages/authpage/sendEmailResetPwd'
import resetPasswordForm from '../components/Pages/authpage/resetPasswordForm';

import { useSelector } from 'react-redux';

function Content() {
    
    let getuser = useSelector(state => state);
    
    if(!getuser.isAuthenticated) {
        
        return (
            <div>
              <Header />
                <div className="container-fluid">
                    <div className="row">

                        <PrivateRoute exact path="/my" component={My}></PrivateRoute>
                        
                        <Route exact path="/" component={Home}></Route>

                        <Route exact path="/register"><Register /></Route>

                        <Route exact path="/login" render={()=>
                            getuser.isAuthenticated ? <Redirect to="/home" />: <Login />
                        }></Route>

                    </div>
                </div>

            </div>
          );
  
    } else {
        
        return (
            <div>
                <Headerauth />
                <div className="container-fluid">
                     <div className="row">
                        <Sidebar />
                            <Route exact path="/" render={()=>
                                <Redirect to="/home" />
                            }></Route>
                            
                            <Route exact path="/login" render={()=>
                                getuser.isAuthenticated ? <Redirect to="/home" />: <Login />
                            }></Route>
                            
                            <PrivateRoute exact path="/home" component={Dashboard}></PrivateRoute>
                            <PrivateRoute exact path="/my" component={My}></PrivateRoute>
                            <PrivateRoute exact path="/reset-pwd" component={sendEmailResetPwd} />

                            <PrivateRoute exact path="/reset-password-form/:str" component={resetPasswordForm} />
                            <PrivateRoute exact path="/logout"><Logout /></PrivateRoute>
                     </div>     
                 </div>
            </div>
                
            
        )
    }
    
}

export default Content;
