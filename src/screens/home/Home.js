import React from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Galery from "../../components/gallery/Gallery";
const Home =({dogs, cats, birds})=>{

    return(
        <div className="home">
           <Hero />
           <Galery  dogs={dogs} cats={cats} birds={birds} />
        </div>
    )
}

export default Home
