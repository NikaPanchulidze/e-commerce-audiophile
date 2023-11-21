export default function Speakers({onItemName, onIsClicked, windowWidth}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }
  return (
    <section className="section-earphones">
      <div className="padding">
        <div className="container">
          <div className="earphone-first">
            <img src={windowWidth < 773 ? `/assets/shared/desktop/image-category-thumbnail-earphones.png` : `/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg`} alt="XX99 MRRK II" />
            <div className="earphone-details">
              <span>NEW PRODUCT</span>
              <h2>YX1 WIRELESS EARPHONES</h2>
              <p>Tailor your listening experience with bespoke dynamic d
                rivers from the new YX1 Wireless Earphones. Enjoy 
                incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
              </p>
              <button onClick={() => handleClick("YX1 EARPHONES")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}