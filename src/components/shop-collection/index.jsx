import React from 'react'
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import ShopItem from '../shop-collection-item'
import {Collection} from './collection.styles';

export default function ShopCollection({title, items, routeName}) {
    let itemNum = 4;
    return (
        <Collection>
            <Link to={`/shop/${routeName}`} className="title">{title.toUpperCase()}</Link>
            <div className="preview">
                {items
                    .slice(0, itemNum)
                    .map(item => <ShopItem key={uuid()} item={item}/>)}
            </div>
        </Collection>
    )
}
