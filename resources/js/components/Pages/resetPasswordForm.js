import React, { useState } from 'react';
import api from '../Api';

import { useForm } from "react-hook-form";
import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button, Spinner} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

export default function resetPasswordForm() {
    const {register, handleSubmit} = useForm();
    const [loading, showLoading] = useState(false);
    const history = useHistory()
    
    const onSubmit = (data) => {
        
        let url='reset-password';
        let datapost = {
            password:data.password,
           password_confirmation:data.password_confirmation
        };
        if(data.password_confirmation !== data.password) {
            alert('Passwords does not match');
            return;
        }
        
        if(data.password.length<8) {
            alert('The password must be at least 8 characters');
            return;
        }
        
        showLoading(true);
        api.post(url, datapost)
          .then((res) => {
              showLoading(false);
                alert('reset password success');
                history.push('/home');
          })
          .catch((err) => {
              showLoading(false);
              if(err.response.status==400) {
                  alert('invalid Email or Password')
              }

          });
          
    }
 
    return(
            
        <main role="main" className="container col-md-10 div-form-xy">
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