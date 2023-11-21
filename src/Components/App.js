import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import SectionHow from "./SectionHow";
import Testimonial from "./Testimonial";
import Headphones from "./Headphones";
import Speakers from "./Speakers";
import Earphones from "./Earphones";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderComplete from "./OrderComplete";
import { shipping } from "./CONSTANTS";
import NavigationBarSlider from "./NavigationBarSlider";

export default function App(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const [isClicked, setIsClicked] = useState("home");
  const [itemName, setItemName] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const appRef = useRef(null);
  const cartReff = useRef(null);
  const sliderReff = useRef(null);

  function handleQuantityPlus() {
    let q = quantity;
    if(q + 1 > 0){
      setQuantity(q + 1);
    }
  }

  function handleQuantityMinus() {
    let q = quantity;
    if(q - 1 > 0){
      setQuantity(q - 1);
    }
  }

  useEffect(() => {
    // Update windowWidth when the component mounts
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const accumulatedPrice = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    setTotalPrice(accumulatedPrice);
  }, [cart]);
  
  useEffect(() => {
    const closeCart = (e) => {
      if (isOpenCart && appRef.current && !appRef.current.contains(e.target) && !cartReff.current.contains(e.target)) {
        setIsOpenCart(false);
      }
    };
  
    document.addEventListener("click", closeCart);
  
    return () => {
      document.removeEventListener("click", closeCart);
    };
  }, [isOpenCart]);

  return (
    <>
      {isBought && <OrderComplete cart={cart} totalPrice={totalPrice + shipping} onIsBought={setIsBought} onIsClicked={setIsClicked} onCart={setCart}/>}
      {isOpenNav && <NavigationBarSlider onIsClicked={setIsClicked} onQuantity={setQuantity} isOpenNav={isOpenNav} onIsOpenNav={setIsOpenNav} sliderReff={sliderReff}/>}

      <div className={isBought || isOpenNav ? "blur" : ""} ref={sliderReff}>
        {isOpenCart && <Cart 
          cart={cart} 
          onIsCart={setCart}
          totalPrice={totalPrice}
          onTotalPrice={setTotalPrice}
          cartReff={cartReff}
          onIsOpenCart={setIsOpenCart}
          onIsClicked={setIsClicked}
        />}
        <Header 
          cart={cart} 
          isClicked={isClicked} 
          onIsClicked={setIsClicked} 
          onItemName={setItemName} 
          onQuantity={setQuantity} 
          isOpenCart={isOpenCart} 
          onIsOpenCart={setIsOpenCart} 
          windowWidth={windowWidth}
          onIsOpenNav={setIsOpenNav}
          />
        <div className={isOpenCart ? "blur" : isClicked === "checkout" ? "grey" : ""} ref={appRef}>
          {isClicked === "checkout" ? 
            <Checkout cart={cart} totalPrice={totalPrice} isBought={isBought} onIsBought={setIsBought} onIsClicked={setIsClicked}/>
          : 
            <>
            {isClicked === "headphones" ? <Headphones onItemName={setItemName} onIsClicked={setIsClicked} windowWidth={windowWidth}/> : ""}
            {isClicked === "speakers" ? <Speakers onItemName={setItemName} onIsClicked={setIsClicked} windowWidth={windowWidth}/> : ""}
            {isClicked === "earphones" ? <Earphones onItemName={setItemName} onIsClicked={setIsClicked} windowWidth={windowWidth}/> : ""}
            {isClicked !== "headphones" &&
            isClicked !== "speakers" &&
            isClicked !== "earphones" &&
            isClicked !== "home" &&
            isClicked !== "checkout" ? 
            <ProductDetails 
              itemName={itemName} 
              onIsClicked={setIsClicked} 
              onItemName={setItemName}
              quantity={quantity}
              onQuantity={setQuantity}
              handleQuantityMinus={handleQuantityMinus}
              handleQuantityPlus={handleQuantityPlus}
              cart={cart}
              onCart={setCart}
              windowWidth={windowWidth}
              />
            : "" 
            }
            <Products onIsClicked={setIsClicked} />
            {isClicked === "home" ? <SectionHow onIsClicked={setIsClicked} onItemName={setItemName}/> : ""}
            </>
          }
          <Testimonial windowWidth={windowWidth}/>
          <Footer onIsClicked={setIsClicked} onQuantity={setQuantity} windowWidth={windowWidth}/>
        </div>
      </div>
    </>
  );
}