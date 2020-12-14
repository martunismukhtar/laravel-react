import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import api from '../Api';
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

import ModalNotif from '../Common/ModalNotif'

export default function Register () {
    
    const {register, handleSubmit} = useForm();
    
    const [show, showNotif] = useState(false);
    const [msg, setMsg] = useState(false);
    
    const onSubmit = (data) => {
        
//        showNotif(true);
//        console.log(data)
        let url='register';

        if(data.password_confirmation !== data.password) {
            alert('Passwords do not match');
            return;
        }
        api.post(url, data)
          .then((res) => {
              setMsg('registration is successful. Please verify your email');
              showNotif(true);
              console.log(res);
          })
          .catch((err) => {
              
              if(err.response.status==422) {
                  setMsg('The data has already been taken');
                  showNotif(true);
//                  alert('The data has already been taken')
              }
              
//              if(err.response.status==400) {
//                  alert('nvalid Email or Password')
//              }//invalid_credentials
              console.log(err.response.status);
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
                            <FormGroup controlId="formBasicEmail">
                              <FormLabel>Username</FormLabel>
                              <FormControl 
                                   type="text" 
                                   name="username"
                                   required
                                   placeholder="Enter username"
                                   ref={register}
                                   />
                            </FormGroup>
                            <FormGroup controlId="formBasicEmail">
                              <FormLabel>Name</FormLabel>
                              <FormControl 
                                   type="text" 
                                   name="name"
                                   required
                                   placeholder="Enter name"
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
                            <FormGroup controlId="formBasicPassword">
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
                  <ModalNotif show={show} message={msg} onHide={onHide}/>  

                </main>
       
        
    )
}

//export default Register;