import React, { useState } from 'react';
import api from '../Api';

import {Form, FormControl, FormGroup, FormLabel, FormText, Button, Spinner} from 'react-bootstrap';

export default function sendEmailResetPwd() {
    const [email, setEmail] = useState();
    const [loading, showLoading] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        
        let url='resend';
        let datapost = {
            email:email,
        };
        if(!email) {
            return;
        }
        showLoading(true);
        api.post(url, datapost)
          .then((res) => {
              showLoading(false);
               alert(res.message);

          })
          .catch((err) => {
              showLoading(false);
                alert(err.response.message);
          });
          
    }
  
    return(
            
        <main role="main" className="container col-md-10 div-form-xy">
            <div className="jumbotron">
              <h1>Reset Password</h1>
              
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
                      <FormText className="text-muted">
                        We'll never share your email with anyone else.
                      </FormText>
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