import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './cart-icon.styles';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount})

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);