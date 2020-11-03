import React from 'react';

import CartDropDown from './dropdown.styles';
import Button from '../../forms/Form-button';

export default function Dropdown() {

    return (
        <CartDropDown>
            <div className="cart-items"/>
            <Button>Go To Checkout</Button>
        </CartDropDown>
    )
}
