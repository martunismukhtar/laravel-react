import React, {useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

function Dashboard () {
    
    let getuser = useSelector(state => state);
    
//    useEffect(() => {
//        console.log(getuser)
//    });
    
    return(
        
        
        <main className="container">
            
            <div className="starter-template text-center py-5 px-3">
                <h1>Bootstrap starter template</h1>
                <p className="lead">Use this document as a way to quickly start any new project.<br/> 
                    All you get is this text and a mostly barebones HTML document.</p>
              </div>

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

export default Dashboard;