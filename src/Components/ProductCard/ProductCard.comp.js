import { BookOnlineOutlined } from "@mui/icons-material";
import React from "react";
import "./ProductCard.css";

const ProductCardComponent = ({ id, name, image, price, description }) => {
  return (
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img src={image} alt={name} class="img-responsive" />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span>Ethnic</span>
        </div>
        <div class="title-product">
          <h3>{name}</h3>
        </div>
        <div class="description-prod">
          <p>{description}</p>
        </div>
        <div class="card-footer">
          <div class="wcf-left">
            <span class="price">
              {parseFloat(price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
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
