import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';

import { useDispatch } from 'react-redux';
import {ResetUSER} from '../redux/actions';

import Loading from '../Common/Loading'

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
              
              if(err.response.status==400) {
                  alert('invalid Email or Password')
              } else if (err.response.status==401) {
                  alert('Unauthorized')
              }//invalid_credentials
              
          });
          
    });
    
    return(
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
           
            <Loading />

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">
                <div className="col-12 col-md">

                  <small className="d-block mb-3 text-muted">&copy; 2020</small>
                </div>
                
              </div>
            </footer>
        </main>
    )
}

export default Logout;