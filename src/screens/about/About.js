import React from "react";
import "./about.css";
import Photo from "../../assets/aboutHeader.png";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Photo})` }}
      ></div>
      <div className="aboutBottom container">
      <div className="row">
        <div className="aboutLeft col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.2324496757964!2d19.815439615723408!3d41.32754587926915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310768ae3c1b%3A0xc22da3095a6b85b8!2sSheshi%20Sk%C3%ABnderbej%2C%20Tirana%201001%2C%20Albania!5e0!3m2!1sen!2sus!4v1607518293178!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="aboutRight col-md-6">
          <h2>ABOUT US</h2>
          <p>
            Welcome to our Animal Gallery, your ultimate destination for
            discovering the fascinating world of animals! Our mission is to bring
            the beauty and diversity of wildlife closer to you through an engaging
            and interactive experience. At our website, you can explore a vast
            collection of animal species, each presented with detailed information
            and stunning visuals. Whether you are a nature enthusiast, a student,
            or just curious about the animal kingdom, we have something special
            for you. Our dedicated team of animal lovers works tirelessly to
            gather and present accurate and interesting information about various
            species from around the globe. We aim to educate and inspire our
            visitors by showcasing the incredible variety of life on our planet.
            Thank you for visiting our website, and we hope you enjoy your journey
            through the amazing world of animals!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
