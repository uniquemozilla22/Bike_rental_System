import React from "react";
import { Link } from "react-router-dom";
import "./Actions.css";

const ActionsComponent = () => {
  return (
    <section class="hero-section">
      <div class="card-grid">
        <Link class="card" to="./bikes">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/previews/003/488/175/original/motor-classic-illustration-free-vector.jpg)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Show All Listings</h3>
          </div>
        </Link>
        <Link class="card" to="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Booked Bikes</h3>
          </div>
        </Link>
        <Link class="card" to="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300)",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Booked Bikes</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ActionsComponent;
