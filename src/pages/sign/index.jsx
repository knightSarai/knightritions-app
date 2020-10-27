import React from 'react';
import SignIn from '../../components/forms/Sign-in';
import SignUp from '../../components/forms/Sign-up';

import './sign.styles.scss';

export default function index() {
    return (
        <div className="container sign-page">
            <div className="forms">
                <SignIn/>
                <SignUp/>
            </div>
            
        </div>
    )
}
