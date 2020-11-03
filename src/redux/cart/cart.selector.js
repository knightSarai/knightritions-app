import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const selectCartItems = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const cartItemsSelector =createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)