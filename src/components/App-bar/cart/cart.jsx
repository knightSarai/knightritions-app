import React from 'react';
import CartIcon from './cart.styles';
import {HiOutlineShoppingBag} from 'react-icons/hi';

export default function Cart() {
    return (
        <CartIcon>
            <HiOutlineShoppingBag className="shopping-icon"/>
            <span className="item-count">0</span>
        </CartIcon>
    )
}
