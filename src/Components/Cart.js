import CartItem from "./CartItem";

export default function Cart({cart, onIsCart, totalPrice, onTotalPrice, cartReff, onIsOpenCart, onIsClicked}) {
  function handleRemoveAll(){
    onIsCart([]);
  }

  function handleCheckout() {
    if(cart.length > 0){
      onIsOpenCart(false);
      onIsClicked("checkout");
    }
  }

  return (
    <section className="section-cart" ref={cartReff}>
      <div className="section-cart-header">
        <h3>CART ({cart.length})</h3>
        <button onClick={handleRemoveAll} className="btn btn-cart">Remove all</button>
      </div>
      <div key={totalPrice} className="cart-items">
        {cart && cart.map((item, index) => <CartItem key={index} item={item} onTotalPrice={onTotalPrice}/>)}
      </div>
      <div className="section-cart-total-price-row">
        <p>TOTAL</p>
        <p className="price">$ {parseFloat(totalPrice).toLocaleString()}</p>
      </div>
      <button onClick={handleCheckout} className={`btn btn-yellow btn-checkout ${cart.length === 0 ? "disabled" : ""}`}>CHECKOUT</button>
    </section>
  );
}