import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";
import {
  AddToStoreCard,
  getCartFromLocalStorage,
  removeFromCart,
} from "../../utility/localstorage";
import CartAdd from "../cart/CartAdd";

const Bottles = ({ bottlePromise }) => {
  const battles = use(bottlePromise);
  const [cart, setCart] = useState([]);

  // console.log("clicked the button", bottle);

  useEffect(() => {
    const AddToStoreCard = getCartFromLocalStorage();

    console.log(AddToStoreCard, battles);
    const storedCart = [];
    for (const id of getCartFromLocalStorage()) {
      console.log(id);
      const bottle = battles.find((bottle) => bottle.id === id);
      if (bottle) {
        storedCart.push(bottle);
      }
    }
    setCart(storedCart);
  }, [battles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    AddToStoreCard(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    console.log("remove from cart", id);

    // remove cart for the UI
    const newCart = cart.filter((bottle) => bottle.id !== id);
    setCart(newCart);
    removeFromCart(id);
  };
  // console.log(battles);
  return (
    <div>
      <h3>Bottles: {battles.length}</h3>
      <h5>Added to cart:{cart.length}</h5>
      <CartAdd
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      ></CartAdd>

      <div className="bottles-card">
        {battles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
