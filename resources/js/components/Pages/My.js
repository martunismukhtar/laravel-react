import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';

import api from '../Api';

import { useSelector, useDispatch } from 'react-redux';

import Card from "react-bootstrap/Card";
import Loading from '../Common/Loading'

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
        
        <main className="container">
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

                  <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                </div>
                <div className="col-6 col-md">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Cool stuff</a></li>
                    <li><a className="link-secondary" href="#">Random feature</a></li>
                    <li><a className="link-secondary" href="#">Team feature</a></li>
                    <li><a className="link-secondary" href="#">Stuff for developers</a></li>
                    <li><a className="link-secondary" href="#">Another one</a></li>
                    <li><a className="link-secondary" href="#">Last time</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Resource</a></li>
                    <li><a className="link-secondary" href="#">Resource name</a></li>
                    <li><a className="link-secondary" href="#">Another resource</a></li>
                    <li><a className="link-secondary" href="#">Final resource</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Team</a></li>
                    <li><a className="link-secondary" href="#">Locations</a></li>
                    <li><a className="link-secondary" href="#">Privacy</a></li>
                    <li><a className="link-secondary" href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </footer>
        </main>
    )
}
