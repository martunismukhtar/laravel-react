import React, { useState } from 'react';
import api from '../Api';
import ModalNotif from '../Common/ModalNotif'
import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

export default function sendEmailResetPwd() {
    const [email, setEmail] = useState();
    const [show, showNotif] = useState(false);
    const [msg, setMsg] = useState(false);
//    const [url, setSuccessUrl] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        
        let url='resend';
        let datapost = {
            email:email,
        };
        if(!email) {
//            alert('Please fill form');
//            return;
            
            setMsg('Please fill form');
            showNotif(true);
            return;
        }
        api.post(url, datapost)
          .then((res) => {
//              console.log(res.message)
               setMsg(res.message);
               showNotif(true);
          })
          .catch((err) => {
              
                setMsg(err.response.message);
                showNotif(true);
              
//              if(err.response.status==400) {
//                  alert('nvalid Email or Password')
//                  setMsg('Please fill form');
//                    showNotif(true);
//                    return;
//              }
              //invalid_credentials
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
          <ModalNotif show={show} message={msg} onHide={onHide}/>  
        </main>
        
        
    )
}