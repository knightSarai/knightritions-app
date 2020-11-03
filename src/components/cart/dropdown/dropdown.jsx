import React from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import {cartItemsSelector} from '../../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../../redux/cart/cart.action'
import CartItem from '../cart-item' ;
import CartDropDown from './dropdown.styles';
import Button from '../../forms/Form-button';

function Dropdown({cartItems, history, toggleCartHidden}) {
    const handleButtonClick = () => {
        toggleCartHidden()
        history.push('/checkout');
    }
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
            <Button onClick={handleButtonClick}>Go To Checkout</Button>
        </CartDropDown>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems: cartItemsSelector
});

const ConnectedComponent = connect(mapStateToProps, {toggleCartHidden})(Dropdown);

export default withRouter(ConnectedComponent);