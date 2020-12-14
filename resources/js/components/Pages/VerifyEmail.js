import React, {useEffect, useState } from 'react';
import ModalNotif from '../Common/ModalNotif'
import api from '../Api';
import {ResetUSER} from '../redux/actions';
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
            
            setMsg('Pleas login');
            showNotif(true);
            setSuccessUrl('/login');
        }
        
        api.get(url)
          .then((res) => {
              
              setMsg(res.message);
              showNotif(true);
              
              dispatch(SetUSER({
                   user:res.data, auth:true
              }));
              
              setSuccessUrl('/');
              console.log(res.message)
          })
          .catch((err) => {
              
              setMsg(err.response.data.message);
              showNotif(true);
              
//              alert(err.response.data.message)
      
              if(err.response.status==400) {
//                  alert('nvalid Email or Password')
              }//invalid_credentials
              console.log(err.response);
          });
//          
          
//        console.log(queryParams)
    }, []);
    
    const onHide=() =>{
        showNotif(false);
        history.push(url);
    }
    
    return (
        <div>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <span className="loading-text">Loading...</span>
            <ModalNotif show={show} message={msg} onHide={onHide}/>  
        </div>
    )
}