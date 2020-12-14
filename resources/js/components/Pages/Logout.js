import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';
import setAuthToken from '../setAuthToken';
import { useDispatch } from 'react-redux';
import {ResetUSER} from '../redux/actions';
//import {postAPI} from '../apiActions'

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

function Logout () {
    let dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPwd] = useState();
    
    useEffect(() => {
        
        api.post('/logout')
          .then((res) => {
              
              localStorage.clear();
                dispatch(ResetUSER());
              window.location.href = "/";
              
          })
          .catch((err) => {
              console.log(err)
      
              if(err.response.status==400) {
                  alert('invalid Email or Password')
              } else if (err.response.status==401) {
                  alert('Unauthorized')
              }//invalid_credentials
              console.log(err.response.status);
          });
          
//        console.log('logut');
    });
    
    return(
        <main className="container">
           
            <div className="row text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="loading-text">Loading...</span>
              
            </div>

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
                <div className="col-6 col-md">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Resource</a></li>
                    <li><a className="link-secondary" href="#">Resource name</a></li>
                    <li><a className="link-secondary" href="#">Another resource</a></li>
                    <li><a className="link-secondary" href="#">Final resource</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Team</a></li>
                    <li><a className="link-secondary" href="#">Locations</a></li>
                    <li><a className="link-secondary" href="#">Privacy</a></li>
                    <li><a className="link-secondary" href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </footer>
        </main>
    )
}

export default Logout;