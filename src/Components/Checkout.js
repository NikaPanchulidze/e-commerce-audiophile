import { useState } from "react";
import SummaryItem from "./SummaryItem";
import EMoney from "./E-money";

export default function Checkout({cart, totalPrice, isBought, onIsBought, onIsClicked}){
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [isSelectedEMoney, setIsSelectedEMoney] = useState(true);

  const shipping = 50;
  const vat = (totalPrice * 18 / 100).toFixed(3);

  function handleGoBack() {
    onIsClicked("home");
  }

  function handleChange(e) {
    const selectedValue = e.target.value;

    if (selectedValue === "e-money") {
      setPaymentMethod("e-money");
      setIsSelectedEMoney(true);
    } else if (selectedValue === "cash-on-delivery") {
      setPaymentMethod("cash-on-delivery");
      setIsSelectedEMoney(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onIsBought(true);
  }

  return (
    <section className="section-checkout">
      <div className="container">
        <button onClick={handleGoBack} className="btn btn-go-back" style={{textDecoration: "underline"}}>Go Back</button>
        <form onSubmit={handleSubmit} className="containers-two">
          <div className="container-checkout">
            <h2>CHECKOUT</h2>
            <p>BILLING DETAILS</p>
            <div className="input-billing-details">
              <div className="input-checkout input-name">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Nika Panchulidze"
                   
                  />
              </div>
              <div className="input-checkout input-email">
                <span>Email Address</span>
                <input
                  type="email"
                  placeholder="nikushapanchulidze04@gmail.com"
                   
                  />
              </div>
              <div className="input-checkout input-phone">
                <span>Phone Number</span>
                <input
                  type="tel"
                  placeholder="+995 5XX XXX-XXX"
                   
                  />
              </div>
            </div>
            <p>SHIPPING INFO</p>
            <div className="input-shipping-info">
              <div className="input-checkout input-address">
                <span>Address</span>
                <input
                  type="text"
                  placeholder="1137 William Avenue"
                  />
              </div>
              <div className="input-checkout input-zip">
                <span>Zip-Code</span>
                <input
                  type="text"
                  placeholder="10001"
                  />
              </div>
              <div className="input-checkout input-city">
                <span>City</span>
                <input
                  type="text"
                  placeholder="Tbilisi"
                  />
              </div>
              <div className="input-checkout input-country">
                <span>Country</span>
                <input
                  type="text"
                  placeholder="Georgia"
                  />
              </div>
            </div>
            <p>PAYMENT DETAILS</p>
            <div className="container-payment-details">
              <div className="payment-method">
                <span className="title-payment-method">Payment Method</span>
                <div className="payment-methods">
                  <div className={`e-Money ${paymentMethod === "e-money" ? "activated" : ""}`}>
                    <div className="container-checkbox">
                      <input
                        type="checkbox"
                        name="e-money-checkbox"
                        checked={isSelectedEMoney}
                        value="e-money"
                        onChange={handleChange}
                      />
                    </div>
                    <span>e-Money</span>
                  </div>
                  <div className={`cash-on-delivery ${paymentMethod === "cash-on-delivery" ? "activated" : ""}`}>
                    <div className="container-checkbox">
                      <input
                        type="checkbox"
                        name="cash-on-delivery-checkbox"
                        checked={!isSelectedEMoney}
                        value="cash-on-delivery"
                        onChange={handleChange}
                      />
                    </div>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
              <div className="e-money-active">
                {paymentMethod === "e-money" ? <EMoney /> : ""}
              </div>
            </div>
          </div>
          <div className="container-summary">
            <h2>SUMMARY</h2>
            {cart.map(item => <SummaryItem item={item} key={item.id}/>)}
            <div className="flex">
              <span>TOTAL</span>
              <p>$ {parseFloat(totalPrice).toLocaleString()}</p>
            </div>
            <div className="flex">
              <span>SHIPPING</span>
              <p>$ {parseFloat(shipping).toLocaleString()}</p>
            </div>
            <div className="flex">
              <span>VAT (INCLUDED)</span>
              <p>$ {parseFloat(vat).toLocaleString()}</p>
            </div>
            <div className="flex margin-top">
              <span>GRAND TOTAL</span>
              <p className="price-grand-total">$ {parseFloat(+shipping + +totalPrice).toLocaleString()}</p>
            </div>
            <button className="btn btn-yellow btn-pay">CONTINUE & PAY</button>
          </div>
        </form>
      </div>
    </section>
  );
}