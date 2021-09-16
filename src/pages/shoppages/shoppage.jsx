import React from 'react';
import { Route } from 'react-router-dom';
import Shopextent from '../../components/shopext/shopextent';
import CollectionPage from '../collection/collectionpreview';
import { ShopPageContainer } from './shoppage.styled';

const Shoppage = ({ match }) => {
 return (
            <ShopPageContainer>
<Route exact path={`${match.path}`} component={Shopextent}/>
<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </ShopPageContainer>
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
    