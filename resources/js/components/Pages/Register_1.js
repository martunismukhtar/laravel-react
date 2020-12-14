import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';

import { useForm } from "react-hook-form";

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

export default function Register () {
    
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        
        console.log(data)
//        let url='register';
//        let datapost = {
//            email:email,
//           password:password
//        };
//        if(!email && !password) {
//            alert('Please fill form');
//            return;
//        }
//        api.post(url, datapost)
//          .then((res) => {
//              
//              const { token, user } = res;
//      
//              localStorage.setItem("jwtToken", token);
//              setAuthToken(token);
//
//              console.log(res);
//          })
//          .catch((err) => {
//              if(err.response.status==400) {
//                  alert('nvalid Email or Password')
//              }//invalid_credentials
//              console.log(err.response.status);
//          });
          
    }
    
    return(
        <main className="container">
           
            <div className="row text-center">
              <Form onSubmit={handleSubmit(onSubmit)}> 
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Username</FormLabel>
                      <FormControl 
                           type="text" 
                           name="username"
                           required
                           placeholder="Enter user"
                           ref={register}
                           />
                    </FormGroup>
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl 
                           type="email" 
                           name="email"
                           required
                           placeholder="Enter email"
                           ref={register}
                           />
                      <FormText className="text-muted">
                        We'll never share your email with anyone else.
                      </FormText>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl 
                          type="password" 
                          name="password"
                          required
                          placeholder="Password" 
                          ref={register}
                          />
                    </FormGroup>
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Address</FormLabel>
                      <Form.Control 
                            as="textarea" 
                            name="address" 
                            placeholder="Enter address"
                            required
                            ref={register}
                            rows={3} />
                            
                    </FormGroup>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              
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

//export default Register;