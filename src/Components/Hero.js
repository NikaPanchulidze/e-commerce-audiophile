export default function Hero({isClicked ,onIsClicked, onItemName}){
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }

  return (
    <>
      {isClicked === "home" ? 
        <section className="section-hero">
          <div className="container">
            <div className="hero-container--first">
              <span>NEW PRODUCT</span>
              <h1 className="heading-primary">XX99 MARK II HEADPHONES</h1>
              <p className="hero-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <button onClick={() => handleClick("XX99-MARK-TWO-HEADPHONES")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
          </div>      
        </section>
      : ""}
      {isClicked === "headphones" ?
        <div className="hero-changed">
          <p className="hero-changed-text">HEADPHONES</p>
        </div>
      : ""}

      {isClicked === "speakers" ?
        <div className="hero-changed">
          <p className="hero-changed-text">SPEAKERS</p>
        </div>
      : ""}

      {isClicked === "earphones" ?
        <div className="hero-changed">
          <p className="hero-changed-text">EARPHONES</p>
        </div>
      : ""}
    </>
  );
}