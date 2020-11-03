import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect';
import { cartItemsSelector, cartItemsPriceSelector } from "../../redux/cart/cart.selector";
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
                cartItems.map(cartItem => cartItem.name )
            }
            <div className="total">
                <span>TOTAL: {totalPrice}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    totalPrice: cartItemsPriceSelector
});

export default connect(mapStateToProps)(Checkout);