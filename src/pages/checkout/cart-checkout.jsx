import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems ,selectTotal } from "../../redux/cart/cart.selector";
import StripeCheckoutButton from '../../components/stripebutton/stripebutton';
import CheckoutItem from '../../components/cart-checkout/checkout';

import "./cart-checkout.scss";

function Cartcheckout({cart , total }) {
    return (
      
 <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
        <span>Product</span>
        </div>
        <div className='header-block'>
        <span>Description</span>
        </div>
        <div className='header-block'>
        <span>Quantity</span>
        </div>
        <div className='header-block'>
        <span>Price</span>
        </div>
        <div className='header-block'>
        <span>Remove</span>
        </div>
    </div>
    {
        cart.map( carted =>
        <CheckoutItem key={carted.id} carted={carted}/> )
    }
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
    )
};
const mapStateToProps = createStructuredSelector({
    cart : selectCartItems,
    total : selectTotal
 });

export default connect(mapStateToProps)(Cartcheckout)