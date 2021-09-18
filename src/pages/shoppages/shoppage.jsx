import React , { Component} from 'react';
import { Route } from 'react-router-dom';
import Shopextent from '../../components/shopext/shopextent';
import './shoppage.scss';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collectionpreview';
import WithSpinner from "../../components/withspinner/withSpinner";
// import { ShopPageContainer } from './shoppage.styled';
import CollectionMap from "../../redux/shop/shop.action"
import{ firestore , convertCollectionsSnapshotTomap } from "../../firebase/firebase.utility";

const WithSpinnerCollectionpage = WithSpinner(CollectionPage);
const WithSpinnerShoppage = WithSpinner(Shopextent);


class Shoppage extends Component {
    state = {
       loading : true
    }

 componentDidMount(){
    const { CollectionMap} = this.props
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot( async snapShot => 
      CollectionMap(convertCollectionsSnapshotTomap(snapShot)) 
    )
    this.setState({ loading : false}); 
 }

   render(){
      const { match } = this.props;
      const { loading } = this.state;
   return  (
      <div className="shoppage">
      <Route exact path={`${match.path}`} 
      render={ (props) => <WithSpinnerShoppage isLoading={loading} {...props}/>}/>
    <Route path={`${match.path}/:collectionId`} 
    render={ (props) => <WithSpinnerCollectionpage isLoading={loading} {...props} />} />
         </div>
       )
   }
}

const mapDispatchToProps = dispatch => ({
   CollectionMap: collection => dispatch(CollectionMap(collection))
 });

 export default connect(null ,mapDispatchToProps)(Shoppage);


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
    