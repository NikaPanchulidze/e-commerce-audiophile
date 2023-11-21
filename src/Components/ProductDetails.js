import { useItem } from "./useItem";

export default function ProductDetails({itemName, onIsClicked, onItemName, quantity, onQuantity, handleQuantityMinus, handleQuantityPlus, cart, onCart, windowWidth}) {
  const [item] = useItem(itemName);

  function handleGoBack() {
    onIsClicked(item.category);
    onQuantity(1);
  }

  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }

  function handleAddCart(item) {
    const isAdded = cart.find((i) => i.name === item.name);
    
    if (!isAdded) {
      const newItem = { ...item, quantity: quantity };
      onCart([...cart, newItem]);
    } else {
      cart.forEach(i => i.name === item.name ? i.quantity += quantity : i);
      // isAdded.quantity += quantity;
      onCart([...cart]);
    }
  
    console.log(cart);
  }
  
  return (
    <section className="product-details">
      <div className="container">
        <button onClick={handleGoBack} className="btn btn-go-back" style={{textDecoration: "underline"}}>Go Back</button>
        <div className="headphone-first">
          <img className="small" src={item.image?.desktop.slice(1)} alt="item"/>
          <div className="headphone-details">
            {item.new ? <span>NEW PRODUCT</span> : ""}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">$ {parseFloat(item.price).toLocaleString()}</p>
            <div>
              <div className="input">
                <span className="minus" onClick={handleQuantityMinus} style={{cursor: "pointer"}}>-</span>
                <span>{quantity}</span>
                <span className="plus" onClick={handleQuantityPlus} style={{cursor: "pointer"}}>+</span>
              </div>
              <button onClick={() => handleAddCart(item)} className="btn btn-yellow">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-details">
        <div className="container-features">
          <h3>FEATURES</h3>
          <p>{item.features}</p>
        </div>
        <div className="container-in-the-box">
          <h3>IN THE BOX</h3>
          <div>
            {item !== undefined ? item?.includes?.map((unit) => <p><span style={{color: "#D87D4A", marginRight: "1rem"}}>{unit.quantity}x</span> {unit.item}</p>) : ""}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="product-images">
          <img src={windowWidth <= 730 ? item?.gallery?.first?.mobile.slice(1) : item?.gallery?.first?.desktop.slice(1)} alt="product" />
          <img src={windowWidth <= 730 ? item?.gallery?.second?.mobile.slice(1) : item?.gallery?.second?.desktop.slice(1)} alt="product" />
          <img src={windowWidth <= 730 ? item?.gallery?.third?.mobile.slice(1) : item?.gallery?.third?.desktop.slice(1)} alt="product" />
        </div>
      </div>

      <div className="container recommended-products">
        <h3>YOU MAY ALSO LIKE</h3>
        <div>
          <div className="recommended">
            <img src={item?.others?.at(0)?.image?.desktop.slice(1)} alt="product" />
            <h4>{item?.others?.at(0)?.name}</h4>
            <button onClick={() => handleClick(item?.others?.at(0).slug)} className="btn btn-yellow">SEE PRODUCT</button>
          </div>
          <div className="recommended">
            <img src={item?.others?.at(1)?.image?.desktop?.slice(1)} alt="product" />
            <h4>{item?.others?.at(1).name}</h4>
            <button onClick={() => handleClick(item?.others?.at(1)?.slug)} className="btn btn-yellow">SEE PRODUCT</button>
          </div>
          <div className="recommended">
            <img src={item?.others?.at(2).image?.desktop?.slice(1)} alt="product" />
            <h4>{item?.others?.at(2).name}</h4>
            <button onClick={() => handleClick(item?.others?.at(2)?.slug)} className="btn btn-yellow">SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </section>
  );
}