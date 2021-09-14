import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingCart } from "../assests/shopping.svg";
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function Carticon({ toggleCartHidden , itemCount }) {
    return (
        <div className="cart-icon">
            <ShoppingCart className="Shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
 const mapStateToProps =createStructuredSelector({
    itemCount : selectCartItemsCount
  })
 
 
export default connect(
mapStateToProps,
mapDispatchToProps
  )(Carticon);