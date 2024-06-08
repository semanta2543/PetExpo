import React from "react";
import "./cards.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Cards = ({ name, origin, image, onModalShow }) => {
  return (
    <div className="card p-2">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body bg-white rounded">
        <h5 className="card-title m-0">{name}</h5>
        <p className="card-text m-0">{origin}</p>
        <button className="buttonviewMore w-100" onClick={onModalShow}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Cards;
