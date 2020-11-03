import React from 'react';
import {connect } from 'react-redux';
import {cartItemsSelector} from '../../../redux/cart/cart.selector'

import CartItem from '../cart-item' ;
import CartDropDown from './dropdown.styles';
import Button from '../../forms/Form-button';

function Dropdown({cartItems}) {

    return (
        <CartDropDown>
            <div className="cart-items">
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </div>
            <Button>Go To Checkout</Button>
        </CartDropDown>
    )
}

const mapStateToProps = state=> ({
    cartItems: cartItemsSelector(state)
});

export default connect(mapStateToProps)(Dropdown)