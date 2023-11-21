import SummaryItem from "./SummaryItem";

export default function OrderComplete({cart, totalPrice, onIsBought, onIsClicked, onCart}) {
  function handleClick() {
    onIsBought(false);
    onIsClicked("home");
    onCart([]);

    window.scrollTo({
      top: 0,
    });
  }
  return (
    <div className="container-complete">
      <img src="/assets/checkout/icon-order-confirmation.svg" alt="icon" />
      <h2>THANK YOU FOR YOUR ORDER</h2>
      <p className="confirmation-text">You will receive an email confirmation shortly.</p>
      <div className="container-containers-complete-2">
        <div className="container-containers-complete-first">
          <div className="border-bottom">
            <SummaryItem item={cart.at(0)} />
          </div>
          <p className="quantity-bought-items">and {cart.length - 1} other item(s)</p>
        </div>
        <div className="container-containers-complete-second">
          <span>GRAND TOTAL:</span>
          <p>$ {parseFloat(totalPrice).toLocaleString()}</p>
        </div>
      </div>
      <button onClick={handleClick} className="btn btn-yellow">BACK TO HOME</button>
    </div>
  );
}