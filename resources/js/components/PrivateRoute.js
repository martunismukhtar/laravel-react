import React from 'react';
import {
  Route, Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function PrivateRoute({component: Component, ...rest}) {
    
    let getuser = useSelector(state => state);
    
    return (
          
            <Route exact {...rest} render={(props)=> (
                
                 getuser.isAuthenticated ?
                     props.location.pathname.search("logout")===1 ? <Component {...props}/> :
                         props.location.pathname.search("verify")===1 ? <Component {...props}/> :   
                        (getuser.user && getuser.user.email_verified_at !==null )  ? 
                     <Component {...props}/> : <Redirect to="/attemp-verify-email" />
                 :
                     <Redirect to="/login" />
            )}
            />
            
    )
    
}

