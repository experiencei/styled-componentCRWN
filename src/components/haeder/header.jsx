import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utility";
import "./header.scss"
import { ReactComponent as Logo } from "../assests/crown.svg"
import Carticon from "../cart-icon/cart.icon";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selector";
import { selectUser } from "../../redux/user/user.selector";
import Cartdropdowm from "../cart-dropdown/cart-dropdowm";
 function Header({currentuser ,hidden}) {
    return (
        <div className="header">
      <Link className="logo-container" to ="/">
       <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className='option' to ="/shop">
           SHOP
        </Link>
        <Link className='option' to="/shop">
           CONTACT
        </Link>
        {currentuser ?( <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to="/signin">SIGN IN</Link>)}
        <Carticon/> 
      </div>
      {hidden?  null : <Cartdropdowm />}
   </div>
 )
 
}

const mapStateToProps = createStructuredSelector({
   currentuser : selectUser,
   hidden : selectHidden
});

export default connect  (mapStateToProps)(Header)