import React from 'react'
/**Redux */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
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
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)