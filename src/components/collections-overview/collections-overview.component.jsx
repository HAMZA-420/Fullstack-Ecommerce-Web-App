import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import ColllectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import { CollectionsOverviewContainer } from './collections-overview.styles';



const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionPreview} )=> (
                <ColllectionPreview key={id} {...otherCollectionPreview} />
            ))
        }
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);