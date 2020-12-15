import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function InfoVerifyEmail() {
    let getuser = useSelector(state => state);

    
    return (
        <main role="main" className="container col-md-10 div-form-xy">
            <div className="jumbotron">
                <h1>Verify Email</h1>
                <p className="lead">Please verify your email</p>
            </div>
        </main>
    )
}


