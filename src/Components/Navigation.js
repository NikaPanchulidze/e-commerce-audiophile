export default function Navigation({cart, onIsClicked, onQuantity, isOpenCart, onIsOpenCart, windowWidth, onIsOpenNav}){
  function handleClick(name) {
    onIsClicked(name);
    onQuantity(1);
  }

  const toggleCart = (e) => {
    e.stopPropagation();
    onIsOpenCart((isOpenCart) => !isOpenCart);
  };

  function toggleSlider(e) {
    e.stopPropagation();
    onIsOpenNav(isOpen => !isOpen);
  }

  return (
    <div className="nav-header container">
      {windowWidth < 773 ? <button onClick={toggleSlider} className="icon-three-outline btn-header--icon"><ion-icon name="reorder-three-outline" className="icon-three-outline btn-header--icon"></ion-icon></button> : ""}
      <p className="logo">audiophile</p>
      {windowWidth < 773 ? 
        ""
      : 
        <nav className="nav-header--buttons">
          <button onClick={() => handleClick("home")} className="btn btn-header">HOME</button>
          <button onClick={() => handleClick("headphones")} className="btn btn-header">HEADPHONES</button>
          <button onClick={() => handleClick("speakers")} className="btn btn-header">SPEAKERS</button>
          <button onClick={() => handleClick("earphones")} className="btn btn-header">EARPHONES</button>
        </nav>
      }
      <div className="cart-effect-container">
        <button onClick={toggleCart} className="btn btn-header btn-header--icon"><ion-icon name="cart-outline" className="btn-header--icon"></ion-icon></button>
        <span className={cart.length > 0 ? "cart-effect" : "hidden"}>{cart.length}</span>
      </div>
    </div>
  );
}