import cart from "../../components/cart"

export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if (existItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
}