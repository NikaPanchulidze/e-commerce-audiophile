import Product from "./Product";

export default function Products({onIsClicked}) {

  return (
    <section className="section-products">
      <div className="container">
        <div className="products">
          <Product
            url="/assets/product-xx99-mark-one-headphones/desktop/result.png"
            name="headphones"
            onIsClicked={onIsClicked}
          />
          <Product
            url="/assets/product-zx9-speaker/desktop/speak-cut.png"
            name="speakers"
            onIsClicked={onIsClicked}
          />
          <Product
            url="/assets/product-yx1-earphones/desktop/earphones-cut.png"
            name="earphones"
            onIsClicked={onIsClicked}
          />
        </div>
      </div>
    </section>
  );
}
