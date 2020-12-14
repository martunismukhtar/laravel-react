import React from 'react';
import {SetUSER} from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

export default function Produk(){
    let dispatch = useDispatch();
    const history = useHistory()
    let user = {
        id:1, name:'yy martunis xxxx', alamat:'Aceh'
    }
    return (
       <button 
            onClick={()=> {
                dispatch(SetUSER(
                    {
                        user:user, auth:true
                    }
                    
                ));
                    history.push('/hasil-redux');
                }
            }>add todo</button>     
    )
}