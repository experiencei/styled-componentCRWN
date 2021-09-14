import React from "react";
import Custombtn from "../customButton/custombtn";
import Cartitem from "../cart-item/cart-item";
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.scss";

 function Cartdropdowm({cart , history , dispatch}) {
    return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {cart.length? 
        (cart.map(carted => 
        <Cartitem key={carted.id} item={carted}/>
        )):
        (<span className="empty-message"> Your Cart is empty</span>)
      }
    </div>
    <Custombtn onClick={ () =>{ 
      history.push("/checkout")
      dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</Custombtn>
  </div>
    )
}

const mapStateToProps = createStructuredSelector({
  cart : selectCartItems
});




export default withRouter(connect(mapStateToProps)(Cartdropdowm));