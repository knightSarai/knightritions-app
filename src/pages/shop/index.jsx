import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import shopData from './shop.data';
import ShopCollection from '../../components/shop-collection';
import './shop.styles.scss';

export default class index extends Component {
    state = {
        ...shopData
    }
    
    render() {
        const {collections} = this.state;
        console.log(collections);
        return (
            <div className="shop-page container">
                {
                    collections.map(collection => (
                        <ShopCollection key={uuid()} {...collection}/>
                    ))
                }
            </div>
        )
    }
}
