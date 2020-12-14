import React from 'react';
import {
  Route, Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';



function PrivateRoute({component: Component, ...rest}) {
    
    let getuser = useSelector(state => state);

    return (
          
            <Route exact {...rest} render={(props)=> (
                 getuser.isAuthenticated ?
                     (getuser.user && getuser.user.email_verified_at !==null )  ? 
                     <Component {...props}/> : <Redirect to="/attemp-verify-email" />
                 :
                     <Redirect to="/login" />
            )}
            />
            
    )
    
}

export default PrivateRoute;
