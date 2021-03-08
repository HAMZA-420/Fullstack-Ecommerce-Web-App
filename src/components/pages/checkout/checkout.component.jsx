import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from'reselect';
import {selectCartItems,selectCartTotal} from '../../../redux/cart/cart.selector';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../stripe-button/stripebutton.component';
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>            
             </div>
             <div className='header-block'>
                <span>Description</span>            
             </div>
             <div className='header-block'>
                <span>Quanitity</span>            
             </div>
             <div className='header-block'>
                <span>Price</span>            
             </div>
             <div className='header-block'>
                <span>Remove</span>            
             </div>
        </div>
        {
            cartItems.map( cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
        }
        <div className="total">
            <span>TOTAL :${total}</span>
            <div className='test-warning'>
                *Please use the follwing test credit Card for Payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV:123
            </div>
            <StripeCheckOutButton price={total}/>
        </div>
    </div>
);

const mapStateToPros = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToPros)(CheckoutPage);