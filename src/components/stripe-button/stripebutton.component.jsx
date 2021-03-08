import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100; //for converting dollar into cents
    const publishableKey = 'pk_test_51ISahBLVHubIMsrkWX3yB2HzWH8GUNCVK7Hrn00Zd9lNwslORKk61E3Z017X85AX45bn6gnceuRQRZ8TMXGMcMD900z4xzNlmX'

   const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
         label = 'Pay Now'
         name = 'CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description = {`Your total is $${price}`}
         amoutn = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {publishableKey}
        />
    )

}

export default StripeCheckOutButton;