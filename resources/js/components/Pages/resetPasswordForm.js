import React, { useState } from 'react';
import api from '../Api';
import ModalNotif from '../Common/ModalNotif'
import { useForm } from "react-hook-form";
import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

export default function resetPasswordForm() {
    const {register, handleSubmit} = useForm();
    const [show, showNotif] = useState(false);
    const [msg, setMsg] = useState(false);
    
    const onSubmit = (data) => {
        
        console.log(data.password_confirmation)
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
    const onHide=() =>{
        showNotif(false);
    }
    
    return(
            
        <main role="main" className="container">
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
          <ModalNotif show={show} message={msg} onHide={onHide}/>  
        </main>
        
    )
}