import React, { Component } from 'react'
 import './App.css';
 import Homepages from './components/directory/directory';
 import Shoppage from './pages/shoppages/shoppage';
 import Header from './components/haeder/header';
 import { connect } from 'react-redux';

 import cartCheckout from './pages/checkout/cart-checkout';
 import { createStructuredSelector } from "reselect";
 import { selectUser } from "../src/redux/user/user.selector"
 import { setCurrentUser } from './redux/user/user.actions.';
 import { ShopSelect1 } from "./redux/shop/shop.selector";
 import SigninUp from './pages/Signup/sign-in-Up';
 import { Route ,Switch ,Redirect } from "react-router-dom";
 import { auth , createDocument ,addCollectionAnddocument} from './firebase/firebase.utility';

 
 
 class App extends Component {

    unsubscribeFromAuth = null;
    
    componentDidMount(){

      const { setCurrentUser , collection } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{ 
     if(userAuth){
      const userRef = await createDocument(userAuth); 

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
           id : snapShot.id,
           ...snapShot.data()
         })
      })
     }
       else{
        setCurrentUser(userAuth);
       } 
       addCollectionAnddocument( "collection" , collection.map(({ title , items}) => {title , items}))
    })
    } 

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
   render() {
     return (
       <div>
      <Header />
      <Switch>
      <Route exact path="/" component={ Homepages }/>
      <Route   path="/shop" component={ Shoppage }/>
      <Route  exact path="/checkout" component={ cartCheckout }/>
      <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentuser ? (
                <Redirect to='/' />
              ) : (
                <SigninUp />
              )
            }
          />
      </Switch>
       </div>
     )
   }
 }

 const mapStateToProps =createStructuredSelector({
   currentuser : selectUser,
   collection : ShopSelect1
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
