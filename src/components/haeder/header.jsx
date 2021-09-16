import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utility";
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink } from "./header.styled";
import { ReactComponent as Logo } from "../assests/crown.svg"
import Carticon from "../cart-icon/cart.icon";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selector";
import { selectUser } from "../../redux/user/user.selector";
import Cartdropdowm from "../cart-dropdown/cart-dropdowm";
 function Header({currentuser ,hidden}) {
    return (
        <HeaderContainer>
      <LogoContainer to ="/">
       <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to ="/shop">
           SHOP
        </OptionLink>
        <OptionLink  to="/shop">
           CONTACT
        </OptionLink>
        {currentuser ?( <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<OptionLink  to="/signin">SIGN IN</OptionLink>)}
        <Carticon/> 
      </OptionsContainer>
      {hidden?  null : <Cartdropdowm />}
   </HeaderContainer>
 )
 
}

const mapStateToProps = createStructuredSelector({
   currentuser : selectUser,
   hidden : selectHidden
});

export default connect  (mapStateToProps)(Header)