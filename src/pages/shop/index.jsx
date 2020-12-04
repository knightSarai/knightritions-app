import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
/* REDUX */
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';
import './shop.styles.scss';

function ShopPage({match, updateCollections}) {
    
    useEffect(() => {
        let unsubscribeFromSnapShot = null;
        const collectionRef = firestore.collection('collections');
        unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
        })
    },[updateCollections]);

    return (
        <div className="shop-page container">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default connect(null, {updateCollections})(ShopPage);