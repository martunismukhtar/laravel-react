import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function hasilRedux() {
    let todos = useSelector(state => state);
    
    useEffect(() => {
//        console.log(todos);
    });
    
    return (
        <div>
        
        </div>    
    )
}
