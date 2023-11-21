import { useEffect, useRef } from "react";

export default function NavigationBarSlider({onIsClicked, onQuantity, isOpenNav, onIsOpenNav, sliderReff}) {
  const sliderContainerRef = useRef(null);

  function handleClick(name) {
    onIsClicked(name);
    onQuantity(1);
    onIsOpenNav(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const closeCart = (e) => {
      if (isOpenNav && sliderReff.current && !sliderReff.current.contains(e.target) && !sliderContainerRef.current.contains(e.target)) {
        onIsOpenNav(false);
      }
    };
  
    document.addEventListener("click", closeCart);
  
    return () => {
      document.removeEventListener("click", closeCart);
    };
  }, [isOpenNav, sliderReff, onIsOpenNav]);

  return (
    <section className={`slider`} ref={sliderContainerRef}>
      <nav className="nav-slider--buttons">
        <button onClick={() => handleClick("home")} className="btn btn-header">HOME</button>
        <button onClick={() => handleClick("headphones")} className="btn btn-header">HEADPHONES</button>
        <button onClick={() => handleClick("speakers")} className="btn btn-header">SPEAKERS</button>
        <button onClick={() => handleClick("earphones")} className="btn btn-header">EARPHONES</button>
      </nav>
      <button onClick={() => onIsOpenNav(false)} className="icon-close"><ion-icon name="close-circle-outline" className="icon-close"></ion-icon></button>
    </section>
  );
}