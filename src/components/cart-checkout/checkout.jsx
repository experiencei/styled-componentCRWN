import React from 'react';
import { connect } from 'react-redux';
import { clearOutitem, addCart ,removeItem } from '../../redux/cart/cart.actions';

import { CheckoutContainer , ImageContainer , TextContainer , QuantityContainer , RemoveItemContainer} from "./cartcheckout.styled"

const CheckoutItem = ({carted , clearOutitem,addCart, removeItem }) => {
 const   { name, imageUrl, price, quantity } = carted;
return (
  <CheckoutContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
        <div onClick={() => removeItem(carted)}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => addCart(carted)}>
          &#10095;
        </div>
      </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveItemContainer onClick={ () => clearOutitem(carted)}>&#10005;</RemoveItemContainer>
  </CheckoutContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearOutitem: item => dispatch(clearOutitem(item)),
    addCart: item => dispatch(addCart(item)),
  removeItem: item => dispatch(removeItem(item))
  });

export default connect(null,mapDispatchToProps)(CheckoutItem);