const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem("cart");

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const setCartToLocalStorage = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}
const AddItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(id);
    setCartToLocalStorage(cart);
}

const removeFromLocalStorage = (id) => {
    const storedCart = getCartFromLocalStorage();
    const updatedCart = storedCart.filter((item) => item !== id);
    setCartToLocalStorage(updatedCart);
}

export {
    getCartFromLocalStorage,
    AddItemToLocalStorage as AddToStoreCard, removeFromLocalStorage as removeFromCart
}