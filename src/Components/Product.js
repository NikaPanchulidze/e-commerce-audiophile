export default function Product({url, name, onIsClicked}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onIsClicked(name);
  }

  return (
    <div className="product">
      <img src={url} alt="products" />
      <h4 className="product-name">{name.toUpperCase()}</h4>
      <button onClick={() => handleClick(name)} className="btn btn-product">SHOP <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></button>
    </div>
  );
}