import React from 'react';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {cartItemsSelector} from '../../redux/cart/cart.selector'

import CartIcon from './cart.styles';
import {HiOutlineShoppingBag} from 'react-icons/hi';

function Cart({toggleCartHidden, itemCount}) {

    return (
        <CartIcon onClick={toggleCartHidden}>
            <HiOutlineShoppingBag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </CartIcon>
    )
}


const mapStateToProps = state => ({
    itemCount: cartItemsSelector(state)
})

export default connect(mapStateToProps, {toggleCartHidden})(Cart)