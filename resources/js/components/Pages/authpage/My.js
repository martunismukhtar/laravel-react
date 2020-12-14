import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';

import api from '../../Api';

import { useSelector, useDispatch } from 'react-redux';

import Card from "react-bootstrap/Card";
import Loading from '../../Common/Loading'

import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button, Col} from 'react-bootstrap';

export default function My () {
    
    const [post, setPost] = useState({})
    const [doloading, setLoading] = useState(true)
    
    let getuser = useSelector(state => state);
    
    
    useEffect(() => {
        
        getCompany();
        
    }, [])
    
    function getCompany (search=null) {
        setLoading(true);
        
        api.post(`mycompany`, {search:search, userid:getuser.user.id})
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
            })
    }   
    
    function remveFavorite(dt) {
        
        var r = confirm("Delete this data?");
        if (r == true) {
//          txt = "You pressed OK!";
            setLoading(true);
            api.post(`removefavorite`, {id:dt, userid:getuser.user.id})
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
                
            }).catch((err) => {
//              if(err.response.status==400) {
//                  alert('invalid Email or Password')
//              }
//              else if(err.response.status==401) {
//                  alert('Unauthorized')
//              }
              console.log(err);
          });
        } 

//        console.log(getuser.user.id)
        
    }
    return(
        
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h5 className="display-5">List of Company</h5>
              
            </div>
            <Form>
                <Form.Row>
                  <Col xs="12">
                    <Form.Control name="search" onChange={(e) => getCompany(e.target.value)} placeholder="Search company" />
                  </Col>
                  
                </Form.Row>
              </Form>
              <br />
            {
                doloading ? <Loading /> :
                post.length>0 ?
                
                post.map((dt, id)=>{
                    
                    return (
                        <Card key={id} style={{ width: '100%', marginBottom:'8px' }}>
               
                            <Card.Body>
                                <Card.Title>
                                    <Form.Check 
                                        type="checkbox" 
                                        checked={true}
                                        label={dt.name} 
                                        value={dt.id}
                                        onChange={(e)=> remveFavorite(e.target.value)}
                                        /> 
                                </Card.Title>
                              <Card.Text>
                                {dt.address}
                              </Card.Text>

                            </Card.Body>
                        </Card>
                    )
                }) :'no data'
            }
            
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">
                <div className="col-12 col-md">

                  <small className="d-block mb-3 text-muted">&copy; 2020</small>
                </div>
                
                
              </div>
            </footer>
        </main>
    )
}
