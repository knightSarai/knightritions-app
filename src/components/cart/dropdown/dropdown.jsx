import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {cartItemsSelector} from '../../../redux/cart/cart.selector'

import CartItem from '../cart-item' ;
import CartDropDown from './dropdown.styles';
import Button from '../../forms/Form-button';

function Dropdown({cartItems}) {

    return (
        <CartDropDown>
            <div className="cart-items">
                {   
                    cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    : (
                        <span className="empty-message">Your cart is empty</span>
                    )   
                }
            </div>
            <Button>Go To Checkout</Button>
        </CartDropDown>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems: cartItemsSelector
});

export default connect(mapStateToProps)(Dropdown)