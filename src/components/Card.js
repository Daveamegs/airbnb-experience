import React from "react";
import Star_Icon from "../images/star.png";

const Card = (props) => {
  return (
    <main className="container">
      <section className="card">
        <img
          src={require(`../images/${props.img}`)}
          alt=""
          className="card-image"
        />
        {console.log(props.img)}
        <div className="rate-country">
          <img src={Star_Icon} alt="" className="star-icon" />
          <span className="rating">{props.rating}</span>
          <span className="number">{props.reviewCount}</span>
          <span className="country">&#8226; {props.country}</span>
        </div>
        <p className="description">{props.title}</p>
        <p className="price">
          <b>
            From <span>${props.price}</span>
          </b>{" "}
          / person
        </p>
      </section>
    </main>
  );
};

export default Card;
