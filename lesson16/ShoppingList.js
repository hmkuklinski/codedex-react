import { useState } from "react";

export default function ShoppingItem(props) {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease(){
    setQuantity(quantity+1);
  }

  function handleDecrease(){
    quantity !== 0? setQuantity(quantity-1): setQuantity(0);
  }

  return (
    <div className="shopping-item">
      <p className="item-info">
        <strong>{props.name}</strong>
        <div className="buttons">
          <button className="btn-decrement" onClick={handleDecrease}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="btn-increment" onClick={handleIncrease}>+</button>
        </div>
      </p>
    </div>
  );
}
