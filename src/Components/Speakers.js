export default function Speakers({onItemName, onIsClicked, windowWidth}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }
  return (
    <section className="section-speakers">
      <div className="padding">
        <div className="container">
          <div className="speaker-first">
          {windowWidth < 773 && windowWidth > 680 && <img src="/assets/shared/mobile/image-zx9-speaker.jpg" alt="XX99 MRRK II" />}
          {windowWidth <= 680 && <img src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg" alt="XX99 MRRK II" />}
          {windowWidth > 773 && <img src="/assets/shared/desktop/image-zx9-speaker.jpg" alt="XX99 MRRK II" />}
            <div className="speaker-details">
              <span>NEW PRODUCT</span>
              <h2>ZX9 SPEAKER</h2>
              <p>The new XX99 Mark II headphones is t
                he pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balan
                ced depth and precision of studio-quality sound.
              </p>
              <button onClick={() => handleClick("ZX9-SPEAKER")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
          </div>

          <div className="speaker-second">
            {windowWidth < 773 && windowWidth > 680 ? <img src="/assets/shared/mobile/image-zx7-speaker.jpg" alt="XX99 MRRK I" /> : ""}
            {windowWidth <= 680 ? <img src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg" alt="XX99 MRRK I" /> : ""}
            <div className="speaker-details">
              <h2>ZX7 SPEAKER</h2>
              <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end
                audiophile components that represents the top of the line powered speakers for home or studio use.
              </p>
              <button onClick={() => handleClick("ZX7-SPEAKER")} className="btn btn-yellow">SEE PRODUCT</button>
            </div>
            {windowWidth > 773 ? <img src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" alt="XX99 MRRK I" /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}