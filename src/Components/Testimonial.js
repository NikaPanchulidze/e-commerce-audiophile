export default function Testimonial({windowWidth}) {
  return (
    <div className="section-testimonial">
      <div className="container">
        <div className="testimonial-details">
          <h2>BRINGING YOU THE <span style={{color: "#D87D4A"}}>BEST</span> AUDIO GEAR</h2>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and lu
            xury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile 
            the best place to buy your portable audio equipment.
          </p>
        </div>
        {windowWidth < 773 && windowWidth > 479 && <img src="/assets/shared/tablet/image-best-gear.jpg" alt="XX99 MRRK II" />}
        {windowWidth <= 479 && <img src="/assets/shared/mobile/image-best-gear.jpg" alt="XX99 MRRK II" />}
        {windowWidth > 773 && <img src="/assets/shared/desktop/image-best-gear.jpg" alt="XX99 MRRK II" />}
      </div>
    </div>
  );
}
