import React from 'react';
import ReactDOM from 'react-dom';

function NotFound () {
    return(
        <main className="container">
            
            <div className="starter-template text-center py-5 px-3">
                 <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
               
            </div>
              </div>

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

export default NotFound;