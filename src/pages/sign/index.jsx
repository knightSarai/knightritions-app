import React from 'react';
import SignIn from '../../components/forms/Sign-in';
import SignOut from '../../components/forms/Sighn-out';

import './sign.styles.scss';

export default function index() {
    return (
        <div className="sign-page container">
            <SignIn/>
            <SignOut/>
        </div>
    )
}
