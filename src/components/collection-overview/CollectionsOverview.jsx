import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopItems} from '../../redux/shop/shop.selector'
import {v4 as uuid} from 'uuid';
import ShopCollection from '../shop-collection';
import Overview from './CollectionsOverview.styles';    

function CollectionOverview({collections}) {
    return (
        <Overview>
            {collections.map(collection => (
                <ShopCollection key={uuid()} {...collection}/>
            ))}
        </Overview>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(CollectionOverview)