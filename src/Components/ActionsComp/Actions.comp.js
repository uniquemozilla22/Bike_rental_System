import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";

const ActionsComponent = ({ data }) => {
  return (
    <section class="hero-section">
      <div class="card-grid">
        {data.map((action, index) => (
          <Link class="card" to={action.link}>
            <div
              class="card__background"
              style={{
                backgroundImage: `url(${action.image})`,
              }}
            ></div>
            <div class="card__content">
              <p class="card__category">{action.type}</p>
              <h3 class="card__heading">{action.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActionsComponent;
