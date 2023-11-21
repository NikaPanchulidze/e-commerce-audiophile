export default function Footer({onIsClicked, onQuantity, windowWidth}) {
  function handleClick(name) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    onIsClicked(name);
    onQuantity(1);
  }

  return (
    <footer className="footer">
      {windowWidth > 772 ? 
        <>
          <div className="container">
            <div className="footer-first-row">
              <p className="logo">audiophile</p>
              <div>
                <button onClick={() => handleClick("home")} className="btn btn-header">HOME</button>
                <button onClick={() => handleClick("headphones")} className="btn btn-header">HEADPHONES</button>
                <button onClick={() => handleClick("speakers")} className="btn btn-header">SPEAKERS</button>
                <button onClick={() => handleClick("earphones")} className="btn btn-header">EARPHONES</button>
              </div>
            </div>

            <div className="footer-second-row">
              <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>
              <div>
                <img src="/assets/shared/desktop/icon-facebook.svg" alt="facebook icon" />
                <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter icon" />
                <img src="/assets/shared/desktop/icon-instagram.svg" alt="instagram icon" />
              </div>
            </div>
            <p className="footer-text">&copy; 2023 Nika Panchulidze. All Rights Reserved.</p>
          </div>
        </>
      :
        <>
          <div className="container">
            <div className="footer-first-row">
              <p className="logo">audiophile</p>
              <div>
                <button onClick={() => handleClick("home")} className="btn btn-header">HOME</button>
                <button onClick={() => handleClick("headphones")} className="btn btn-header">HEADPHONES</button>
                <button onClick={() => handleClick("speakers")} className="btn btn-header">SPEAKERS</button>
                <button onClick={() => handleClick("earphones")} className="btn btn-header">EARPHONES</button>
              </div>
            </div>

            <div className="footer-second-row">
              <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>
            <div className="footer-third-row">
              <p className="footer-text">&copy; 2023 Nika Panchulidze. All Rights Reserved.</p>
              <div>
                <img src="/assets/shared/desktop/icon-facebook.svg" alt="facebook icon" />
                <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter icon" />
                <img src="/assets/shared/desktop/icon-instagram.svg" alt="instagram icon" />
              </div>
            </div>
          </div>
          </>
      }
    </footer>
  );
}
