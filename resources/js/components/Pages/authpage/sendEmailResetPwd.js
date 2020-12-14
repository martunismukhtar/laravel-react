import React, { useState } from 'react';
import api from '../../Api';

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

export default function sendEmailResetPwd() {
    const [email, setEmail] = useState();
   
    function handleSubmit(e){
        e.preventDefault();
        
        let url='resend';
        let datapost = {
            email:email,
        };
        if(!email) {
            alert('Please fill form');
            return;
            
        }
        api.post(url, datapost)
          .then((res) => {
              
              alert(res.message);
      
          })
          .catch((err) => {
              
              alert(err.response.message);
      
              console.log(err.response.status);
          });
          
    }
    
    return(
            
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
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
                      Submit
                    </Button>
                  </Form>
            </div>
         
        </main>
        
        
    )
}