import React from 'react';
import { Route } from 'react-router-dom';
import Shopextent from '../../components/shopext/shopextent';
import CollectionPage from '../collection/collectionpreview';


const Shoppage = ({ match }) => {
 return (
            <div>
<Route exact path={`${match.path}`} component={Shopextent}/>
<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </div>
        )
    }
 export default Shoppage;


//  import React from 'react';
// import { Route } from 'react-router-dom';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// const ShopPage = ({ match }) => (
//   <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

// export default ShopPage;
    