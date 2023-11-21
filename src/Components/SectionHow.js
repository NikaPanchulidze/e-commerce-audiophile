export default function SectionHow({onIsClicked, onItemName}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
    })
    onItemName(name);
    onIsClicked("");
  }

  return (
    <section className="section-how">
      <div className="container">
        <div className="container-first">
          <img src="/assets/product-zx9-speaker/desktop/speak-cut.png" alt="product-zx9-speaker" />
          <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
          <div className="container-first--details">
            <h2 className="heading-primary">ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button onClick={() => handleClick("ZX9 SPEAKER")} className="btn btn-gray">SEE PRODUCT</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-second">
          <div className="container-second--details">
            <h3 className="heading-tertiary">ZX7 SPEAKER</h3>
            <button onClick={() => handleClick("ZX7 SPEAKER")} className="btn btn-black">SEE PRODUCT</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-third">
          <div className="container-third--first-half"></div>
          <div className="container-third--second-half">
            <div className="container-third--second-half--details">
              <h3 className="heading-tertiary">YX1 EARPHONES</h3>
              <button onClick={() => handleClick("YX1 EARPHONES")} className="btn btn-black">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}