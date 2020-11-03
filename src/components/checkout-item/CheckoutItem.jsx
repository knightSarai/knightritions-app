import React from 'react';
/**redux */
import {connect} from 'react-redux';
import {clearItemFromCart, addItemToCart, removeItemFromCart} from '../../redux/cart/cart.action'
/**Styles */
import Item from './CheckoutItem.styles';

function CheckoutItem({cartItem, clearItem, addItem, removeItem }) {
    const {name, img, price, quantity} = cartItem;
    return (
        <Item>
            <div className="image-container">
                <img src={img} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
        </Item>
    )
}
const actions = {
    clearItem: clearItemFromCart,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
}
export default connect(null, actions)(CheckoutItem);
