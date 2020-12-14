import React, { useState } from 'react';
import api from '../../Api';

import { useForm } from "react-hook-form";
import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

export default function resetPasswordForm() {
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        
        let url='reset-password';
        let datapost = {
            password:data.password,
           password_confirmation:data.password_confirmation
        };
        if(data.password_confirmation !== data.password) {
            alert('Passwords do not match');
            return;
        }
        api.post(url, datapost)
          .then((res) => {
                alert('reset password success');
          })
          .catch((err) => {
              if(err.response.status==400) {
                  alert('nvalid Email or Password')
              }//invalid_credentials
              console.log(err.response.status);
          });
          
    }
 
    return(
            
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="jumbotron">
              <h1>Reset Password</h1>
              
              <Form onSubmit={handleSubmit(onSubmit)}> 
                    
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
                    
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
            </div>
       
        </main>
        
    )
}