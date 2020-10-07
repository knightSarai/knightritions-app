import React, { Component } from 'react';
import shopData from './shop.data';

export default class index extends Component {
    state = {
        shopData
    }
    
    render() {
        console.log(this.state);
        return (
            <div>
                Shop
            </div>
        )
    }
}
