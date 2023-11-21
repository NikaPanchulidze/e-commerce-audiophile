import Navigation from "./Navigation";
import Hero from "./Hero";

export default function Header({cart, isClicked, onIsClicked, onItemName, onQuantity, isOpenCart, onIsOpenCart, windowWidth, onIsOpenNav}){
  return (
    <header className={isClicked !== "home" ? "header black" : "header" }>
      <div className="padding">
        <Navigation cart={cart} onIsClicked={onIsClicked} onQuantity={onQuantity} isOpenCart={isOpenCart} onIsOpenCart={onIsOpenCart} windowWidth={windowWidth} onIsOpenNav={onIsOpenNav}/>
      </div>
      <div className={isOpenCart ? "blur" : ""}>
        <Hero isClicked={isClicked} onIsClicked={onIsClicked} onItemName={onItemName}/>
      </div>
    </header>
  )
}