import React from 'react'
// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
// import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'
// import {selectCollections} from '../../redux/shop/shop.selectors'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import {Route} from 'react-router-dom'

// class ShopPage extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             collections : SHOP_DATA
//         }
//     }

//     render(){
//         const {collections} = this.state;

//         return(
//             <div className='shop-page'>
//                 {collections.map(({id, ...otherCollectionProps}) => (
//                     <CollectionPreview key={id} {...otherCollectionProps}/>
//                 ))}
//             </div>
//         )
//     }

// }


// const ShopPage = ({collections}) => (
//             <div className='shop-page'>
//                 {collections.map(({id, ...otherCollectionProps}) => (
//                     <CollectionPreview key={id} {...otherCollectionProps}/>
//                 ))}
//             </div>
//)

const ShopPage = ({match}) => (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                {/*<CollectionsOverview />*/}
            </div>
)


// const mapStateToProps = createStructuredSelector({
//     collections : selectCollections
// })


// export default connect(mapStateToProps)(ShopPage);

export default ShopPage;