import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
/* REDUX */
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import WithSpinner from '../../components/WithSpinner';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';
import './shop.styles.scss';

const WithSpinnerCollectionOverView= WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage); 

function ShopPage({match, updateCollections}) {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        let unsubscribeFromSnapShot = null;
        const collectionRef = firestore.collection('collections');
        unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            setLoading(false);
        });
        
        return () => {
            unsubscribeFromSnapShot();
        }
    },[updateCollections]);

    return (
        <div className="shop-page container">
            <Route exact path={`${match.path}`} render={(props)=> <WithSpinnerCollectionOverView isLoading={isLoading} {...props} />} />
            <Route  path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={isLoading} {...props} />} />
        </div>
    )
}



export default connect(null, {updateCollections})(ShopPage);