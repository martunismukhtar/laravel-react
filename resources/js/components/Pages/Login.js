import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';
import { useDispatch } from 'react-redux';
import {SetUSER} from '../redux/actions';
import { useHistory } from 'react-router-dom'

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

function Login () {
    let dispatch = useDispatch();
    const history = useHistory()
    const [email, setEmail] = useState();
    const [password, setPwd] = useState();
    
    function handleSubmit(e){
        e.preventDefault();
        
        let url='login';
        let datapost = {
            email:email,
            password:password
        };
        if(!email && !password) {
            alert('Please fill form');
            return;
        }
        api.post(url, datapost)
          .then((res) => {
              
              const { token, user } = res;
      
              localStorage.setItem("token", token);
              
              dispatch(SetUSER({
                   user:user, auth:true
              }));
              
              if(!res.user.email_verified_at || res.user.email_verified_at===null) {
                 history.push('/attemp-verify-email');
              } else {
                  history.push('/home');

              }

          })
          .catch((err) => {
              if(err.response.status==400) {
                  alert('invalid Email or Password')
              }//invalid_credentials
              else if(err.response.status==401) {
                  alert('Unauthorized')
              }
              
          });
          
    }
    
    return(
        <main role="main" className="container col-md-4 div-form-xy">
            <div className="jumbotron">
              <h1>Login</h1>
              
              <Form onSubmit={handleSubmit}> 
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl 
                           type="email" 
                           name="email"
                           placeholder="Enter email"
                           onChange={(e)=> {
                               
                               setEmail(e.target.value)
                           }}
                           />
                      
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl 
                          type="password" 
                          name="password"
                          placeholder="Password" 
                          onChange={(e)=> {
                             
                              setPwd(e.target.value)
                          }}/>
                    </FormGroup>
                    
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
            </div>
          
        </main>
    )
}

export default Login;