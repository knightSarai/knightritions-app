import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';
import './shop.styles.scss';

function ShopPage({match}) {
    return (
        <div className="shop-page container">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage;