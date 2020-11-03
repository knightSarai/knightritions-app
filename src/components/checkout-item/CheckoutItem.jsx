import React from 'react';
import Item from './CheckoutItem.styles';

export default function CheckoutItem({ cartItem: {name, img, price, quantity} }) {
    return (
        <Item>
            <div className="image-container">
                <img src={img} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button">&#10005;</span>
        </Item>
    )
}
