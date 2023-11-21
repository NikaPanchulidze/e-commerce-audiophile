export default function Headphones({onItemName, onIsClicked, windowWidth}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }
  return (
    <section className="section-headphones">
      <div className="padding">
        <div className="container">
          <div className="headphone-first">
            {windowWidth < 773 && windowWidth > 680 && <img src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" alt="XX99 MRRK II" />}
            {windowWidth <= 680 && <img src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="XX99 MRRK II" />}
            {windowWidth > 773 && <img src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" alt="XX99 MRRK II" />}
            <div className="headphone-details">
              <span>NEW PRODUCT</span>
              <h2>XX99 MARK II HEADPHONES</h2>
              <p>The new XX99 Mark II headphones is t
                he pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balan
                ced depth and precision of studio-quality sound.
              </p>
              <button onClick={() => handleClick("XX99-MARK-TWO-HEADPHONES")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
          </div>

          <div className="headphone-second">
            {windowWidth < 773 && windowWidth > 680 ? <img src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="XX99 MRRK I" /> : ""}
            {windowWidth <= 680 ? <img src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg" alt="XX99 MRRK I" /> : ""}
            <div className="headphone-details">
              <h2>XX99 MARK I HEADPHONES</h2>
              <p>As the gold standard for headpho
                nes, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
              </p>
              <button onClick={() => handleClick("XX99-MARK-ONE-HEADPHONES")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
            {windowWidth > 773 ? <img src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" alt="XX99 MRRK II" /> : ""}
          </div>

          <div className="headphone-third">
            {windowWidth < 773 && windowWidth > 680 && <img src="/assets/shared/mobile/image-xx59-headphones.jpg" alt="XX99 MRRK II" />}
            {windowWidth <= 680 && <img src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg" alt="XX99 MRRK II" />}
            {windowWidth > 773 && <img src="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg" alt="XX99 MRRK II" />}
            <div className="headphone-details">
              <h2>XX59 HEADPHONES</h2>
              <p>Enjoy your audio almost anywhere and cu
                stomize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
              </p>
              <button onClick={() => handleClick("XX59-HEADPHONES")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}