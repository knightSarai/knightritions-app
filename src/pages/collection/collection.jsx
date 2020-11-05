import React from 'react';
import {v4 as uuid} from 'uuid';
/**Redux */
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector'
/*components */
import CollectionItem from '../../components/shop-collection-item'
/** Styles */
import './collection.styles.scss'

function Category({collection}) {
    const {title, items} = collection;
    console.log(collection);
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={uuid()} item={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Category);
