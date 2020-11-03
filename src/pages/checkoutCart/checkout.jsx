import React from 'react'
/*redux*/
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect';
import { cartItemsSelector, cartItemsPriceSelector } from "../../redux/cart/cart.selector";
/*components*/
import CheckoutItem from '../../components/checkout-item'
/*styles */
import './checkout.styles.scss'

function Checkout({cartItems, totalPrice}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
            }
            <div className="total">
                <span>TOTAL: {totalPrice} JD</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    totalPrice: cartItemsPriceSelector
});

export default connect(mapStateToProps)(Checkout);