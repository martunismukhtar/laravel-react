import React, {useEffect, useState } from 'react';

import api from '../Api';
import {SetUSER} from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

export default function VerifyEmail(props) {
    let dispatch = useDispatch();
    const [show, showNotif] = useState(false);
    const [msg, setMsg] = useState(false);
    const [url, setSuccessUrl] = useState(false);
    
    const history = useHistory();
    
    let getuser = useSelector(state => state);
    const initialState = {
        isAuthenticated: false,
        user: {}
    };
    
    useEffect(() => {    
        const queryParams = props.location.search;
        const userId = props.match.params.id;
        
        let url='verify/'+ userId + queryParams;
        
        if(!getuser.isAuthenticated) {
            
            alert('Please login');
            history.push('/login');
        }
        
        api.get(url)
          .then((res) => {
              dispatch(SetUSER({
                   user:res.data, auth:true
              }));
              alert(res.message);
              history.push('/home');

          })
          .catch((err) => {
              
              alert(err.response.data.message);
              
          });

    }, []);
     
    return (
        <div>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <span className="loading-text">Loading...</span>
            
        </div>
    )
}