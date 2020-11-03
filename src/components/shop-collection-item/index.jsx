import React from 'react';
import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart.action'

import {Item} from './item.styles';

function CollectionItem({item, addItemToCart}) {
    const {id, img, name, price} = item;
    return (
        <Item key={id}>
            <div className="img-box">
                <img src={img} alt=""/>
            </div>
            <div className="content-box">
                <h3>{name}</h3>
                <h2 className="price">{price}<small>JOD</small></h2>
                <button className="cart" onClick={()=> addItemToCart(item)}>Add To Cart</button>
            </div>
        </Item>
    )
};

export default connect(null,{addItemToCart})(CollectionItem);
