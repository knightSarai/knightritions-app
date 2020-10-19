import React from 'react';
import Button from './button.styles';

export default function FormInput({children, ...otherProps}) {
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    )
}
