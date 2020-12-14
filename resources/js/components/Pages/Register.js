import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button, Spinner} from 'react-bootstrap';

export default function Register () {
    
    const {register, handleSubmit} = useForm();
    
    const [loading, showLoading] = useState(false);
    
    const onSubmit = (data) => {
        
        let url='register';

        if(data.password_confirmation !== data.password) {
            alert('Passwords do not match');
            return;
        }
        
        showLoading(true);
        api.post(url, data)
          .then((res) => {
              alert('registration is successful. Please verify your email')
              showLoading(false);
          })
          .catch((err) => {
                showLoading(false);
              if(err.response.status==422) {
                  alert('The data has already been taken')

              } else {
                  alert('Error, please verify your form')
              }
              
          });
          
    }
    
    const change=() =>{
        setMsg('registration is successful. Please login');
        showNotif(true);
    }
    
    const onHide=() =>{
        showNotif(false);
    }
    
    return(
           
        <main role="main" className="container">
                    <div className="jumbotron">
                      <h1>Register</h1>

                      <Form onSubmit={handleSubmit(onSubmit)}> 
                            <FormGroup>
                              <FormLabel>Username</FormLabel>
                              <FormControl 
                                   type="text" 
                                   name="username"
                                   required
                                   placeholder="Enter username"
                                   ref={register}
                                   />
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>Name</FormLabel>
                              <FormControl 
                                   type="text" 
                                   name="name"
                                   required
                                   placeholder="Enter name"
                                   ref={register}
                                   />
                            </FormGroup>
                            <FormGroup>
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

                            <FormGroup>
                              <FormLabel>Password</FormLabel>
                              <FormControl 
                                  type="password" 
                                  name="password"
                                  required
                                  placeholder="Password" 
                                  ref={register}
                                  />
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>Password</FormLabel>
                              <FormControl 
                                  type="password" 
                                  name="password_confirmation"
                                  required
                                  placeholder="Password Confirmation" 
                                  ref={register}
                                  />
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>Phone Number</FormLabel>
                              <Form.Control 
                                    type="text"
                                    name="phone_number" 
                                    placeholder="Phone Number"
                                    required
                                    ref={register}
                                    />

                            </FormGroup>
                            <FormGroup>
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
                            Submit &nbsp;
                            {
                                loading && (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                      />
                                )
                            }
                              
                            </Button>
                          </Form>
                    </div>

                </main>
       
        
    )
}

//export default Register;