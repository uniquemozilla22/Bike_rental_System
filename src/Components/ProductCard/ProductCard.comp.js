import { BookOnlineOutlined, Edit } from "@mui/icons-material";
import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../UI/Buttons";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux/es/exports";

const ProductCardComponent = ({
  id,
  name,
  image,
  price,
  description,
  showModal,
}) => {
  const isManager = useSelector((state) => state.user.isManager);
  const navigation = useNavigate();

  const goToProduct = () => navigation("./" + id);
  return (
    <div class="wsk-cp-product" onClick={goToProduct}>
      <div class="wsk-cp-img">
        <img src={image} alt={name} class="img-responsive" />
      </div>

      <div class="wsk-cp-text">
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
            {!showModal &&
              (isManager ? (
                <Tooltip title={"Edit " + name}>
                  <Buttons primary>
                    <Edit />
                  </Buttons>
                </Tooltip>
              ) : (
                <Tooltip title="Book this bike">
                  <Buttons primary>
                    <BookOnlineOutlined />
                  </Buttons>
                </Tooltip>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
