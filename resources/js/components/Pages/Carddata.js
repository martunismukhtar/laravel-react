import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';
import useAsyncEffect from "use-async-effect";
import api from '../Api';

import { useSelector, useDispatch } from 'react-redux';

import Card from "react-bootstrap/Card";

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button} from 'react-bootstrap';

import axios from 'axios';
import ModalNotif from '../Common/ModalNotif'

export default function Carddata (data) {
        
        useEffect(() => {  
            if(data)
            console.log(data)
        });
    return (
            
        <div>
        <Card key={1} style={{ width: '100%' }}>
               
                <Card.Body>
                    <Card.Title>
                        <Form.Check 
                            type="checkbox" 
                            label="Company Name" 
                            value="12"
                            onChange={(e)=> alert(e.target.value)}
                            /> 
                    </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
        
        </div>    
            
            
            
    )
}