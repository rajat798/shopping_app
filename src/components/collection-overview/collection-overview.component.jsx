import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)

