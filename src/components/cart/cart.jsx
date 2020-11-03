import React from 'react';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import CartIcon from './cart.styles';
import {HiOutlineShoppingBag} from 'react-icons/hi';

function Cart({toggleCartHidden}) {
    return (
        <CartIcon onClick={toggleCartHidden}>
            <HiOutlineShoppingBag className="shopping-icon"/>
            <span className="item-count">0</span>
        </CartIcon>
    )
}



export default connect(null, {toggleCartHidden})(Cart)