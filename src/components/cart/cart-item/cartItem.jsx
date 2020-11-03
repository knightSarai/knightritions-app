import React from 'react';

import Item from './cart-item.styles';

export default function cartItem({ item: {img, name, price, quantity} }) {

    return (
        <Item>
            <img src={img} alt={name}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price} JD</span>
            </div>
        </Item>
    )
}
