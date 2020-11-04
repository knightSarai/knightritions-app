import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopItems} from '../../redux/shop/shop.selector'
import {v4 as uuid} from 'uuid';
import ShopCollection from '../../components/shop-collection';
import './shop.styles.scss';

function ShopPage({collections}) {
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

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})
export default connect(mapStateToProps)(ShopPage)