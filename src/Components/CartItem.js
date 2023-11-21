import { useState } from "react";

export default function CartItem({item, onTotalPrice}) {
  const [quantity, setQuantity] = useState(item.quantity);

  function handleQuantityMinus(e) {
    e.stopPropagation();
    let q = quantity;
    if(q - 1 > 0){
      item.quantity--;
      setQuantity(q - 1);
      onTotalPrice((total) => total - item.price);
    }
  }

  function handleQuantityPlus(e) {
    e.stopPropagation();
    let q = quantity;
    item.quantity++;
    setQuantity(q + 1);
    onTotalPrice((total) => total + item.price);
  }

  return (
    <div className="cart-item">
      <img src={item.image?.desktop.slice(1)} alt="product" />
      <div>
        <p className="cart-item-title">{item.name}</p>
        <p className="cart-item-price">$ {parseFloat(item.price).toLocaleString()}</p>
      </div>
      <div className="input input-cart">
        <span onClick={handleQuantityMinus} style={{cursor: "pointer"}}>-</span>
        <span>{quantity}</span>
        <span onClick={handleQuantityPlus} style={{cursor: "pointer"}}>+</span>
      </div>
    </div>
  );
}