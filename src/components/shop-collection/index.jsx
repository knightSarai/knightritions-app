import React from 'react'
import {v4 as uuid} from 'uuid';
import ShopItem from '../shop-collection-item'
import {Collection} from './collection.styles';

export default function index({title, items}) {
    let itemNum = 4;
    return (
        <Collection>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .slice(0, itemNum)
                    .map(item => <ShopItem key={uuid()} {...item}/>)}
            </div>
        </Collection>
    )
}
