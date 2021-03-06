import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import ColllectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionPreview} )=> (
                <ColllectionPreview key={id} {...otherCollectionPreview} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);