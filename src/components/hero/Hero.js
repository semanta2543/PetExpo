import React from "react";
import "./hero.css";
import carousel1 from "../../assets/Carousel1.jpg";
import carousel2 from "../../assets/Carousel2.jpg";
import carousel3 from "../../assets/Carousel3.jpg";
import Slider from "react-slick";



function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };
  return (
    <div className="heroContainer">
      <div className="heroLeft col-3 d-flex flex-column gap-3">
        <h1>Luna's Friends</h1>
        <p>
          {" "}
          Welcome to Luna's Friends, your go-to hub for discovering the wonders
          of the animal kingdom! Uncover fascinating details about your favorite
          animals and find your new best friend. Dive into the wonderful world
          of pets with us!
        </p>
        <a className="showMorebtn btn" href="#gallery" >Show More</a>
      </div>
      <div className=" heroRight slider-container d-flex justify-content-center">
        <Slider {...settings}>
          <div>
            <img src={carousel1} className="slider-image" />
          </div>
          <div>
            <img src={carousel2} className="slider-image" />
          </div>
          <div>
            <img src={carousel3} className="slider-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Hero;
