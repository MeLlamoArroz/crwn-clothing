import React from "react";
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
      <span className='item-count'> { itemCount } </span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  })
}

const mapStateToProps = (currentState) => {
  return ({
    itemCount: selectCartItemsCount(currentState)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)