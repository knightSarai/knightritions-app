import React from 'react';
import {Link} from 'react-router-dom'
import {Item} from './item.styles';

export default function index({id, img, name, price}) {
    return (
        <Item key={id}>
            <div className="img-box">
                <img src={img} alt=""/>
            </div>
            <div className="content-box">
                <h3>{name}</h3>
                <h2 className="price">{price}<small>JOD</small></h2>
                <Link to="" className="cart">Add To Cart</Link>
            </div>
        </Item>
    )
}
