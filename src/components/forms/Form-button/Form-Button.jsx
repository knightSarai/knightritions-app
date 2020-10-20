import React from 'react';
import Button from './button.styles';

export default function FormInput({children, isGoogleSignIn, ...otherProps}) {
    return (
        <Button {...otherProps} isGoogleSignIn={isGoogleSignIn}>
            {children}
        </Button>
    )
}
