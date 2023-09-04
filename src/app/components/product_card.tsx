import React from "react";
import "../style/product_card.scss";

const ProductCard: React.FC = () => {
  return (
    <div className="product-card-root">
      <div className="product-card-container">
        <div className="product-card-content">
          <img
            src="https://file.rendit.io/n/Gz7B7dhFRdElNrxLiAt9.png"
            className="product-image"
            alt="Product Image"
          />
          <div className="product-price">$100</div>
          <div className="product-name">Zebronics head phone</div>
          <div className="product-description">
            A portable headphone with a battery life of 20 hours and IP67
            rating. Comes with a 3 years warranty.
          </div>
          <div className="color-selection-label">Choose your color</div>
          <div className="color-options">
            <div className="color-option red" />
            <div className="color-option blue" />
            <div className="color-option black" />
          </div>
          <a className="add-to-cart" href="">
            Add to cart
          </a>
          <a className="buy-now" href="">
            Buy now
          </a>
          <a className="read-reviews" href="">
            Read reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
