import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";
import { AddToStoreCard } from "../../utility/localstorage";

const Bottles = ({ bottlePromise }) => {
  const battles = use(bottlePromise);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (bottle) => {
    // console.log("clicked the button", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    AddToStoreCard(bottle.id);
  };
  // console.log(battles);
  return (
    <div>
      <h3>Bottles: {battles.length}</h3>
      <h5>Added to cart:{cart.length}</h5>
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
