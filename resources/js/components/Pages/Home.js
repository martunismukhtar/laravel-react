import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';

import api from '../Api';

import { useSelector, useDispatch } from 'react-redux';

import Card from "react-bootstrap/Card";
import Loading from '../Common/Loading'
import {Form, FormControl, FormGroup, FormLabel, FormText, FormCheck, Radio, Button, Col} from 'react-bootstrap';

function Home () {
    
    const [doloading, setLoading] = useState(true)
    
    let getuser = useSelector(state => state);
    
    const [post, setPost] = useState({})
    
    useEffect(() => {
//        console.log(getuser)
        getCompany();
        
    }, [])
    
    function getCompany (search=null) {
        setLoading(true);
        
        api.post(`company`, {search:search})
            .then((res) => {
                setPost(res.data)
                setLoading(false)
            })
    }
   
    return(
            
        <main role="main" className="px-3 py-3 pt-md-5 pb-md-12 mx-auto col-9">
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
                                    {dt.name}
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
                
              </div>
            </footer>
        </main>
    )
}

export default Home;