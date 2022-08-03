import { BookOnlineOutlined } from "@mui/icons-material";
import React from "react";
import "./ProductCard.css";

const ProductCardComponent = () => {
  return (
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img
          src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
          alt="Product"
          class="img-responsive"
        />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span>Ethnic</span>
        </div>
        <div class="title-product">
          <h3>My face not my heart</h3>
        </div>
        <div class="description-prod">
          <p>
            Description Product tell me how to change playlist height size like
            600px in html5 player. player good work now check this link
          </p>
        </div>
        <div class="card-footer">
          <div class="wcf-left">
            <span class="price">Rp500.000</span>
          </div>
          <div class="wcf-right">
            <a href="#" class="buy-btn">
              <BookOnlineOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
