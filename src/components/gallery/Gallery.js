import React from "react";
import "./gallery.css";
import Cards from "../cards/Cards";
import { useState } from "react";
import Modal from "../modal/Modal";


const Gallery = ({dogs, cats, birds}) => {

    const [modalShow, setModalShow] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([]);
    const [isBird, setIsBird] = useState(false);
    
    return(
        <>
        <div className="gallery d-flex flex-column gap-3" id="gallery">
            <div className="galleryTitle d-flex justify-content-center">
                <h1 className="">Meet your new friends :)</h1>
            </div>
            <div className="dogsCards d-flex flex-column align-items-center w-100">
                <h4>Dogs</h4>
                <p> Discover a variety of dog breeds, each with unique traits and personalities.</p>
           <div className="cardContainer">
            {dogs.slice(0,4).map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(false);
                }}/>)
            })}
          
           </div>
            </div>
            <div className="catsCards d-flex flex-column align-items-center w-100">
            <h4>Cats</h4>
                <p>Learn about different cat breeds and their distinctive characteristics.</p>
           <div className="cardContainer">
           {cats.slice(0,4).map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(false);
                }}/>)
            })}
           </div>
            </div>
            <div className="birdsCards d-flex flex-column align-items-center w-100">
            <h4>Birds</h4>
                <p>Explore diverse bird species, each with its own vibrant colors and behaviors.</p>
            <div className="cardContainer">
            {birds.slice(0,4).map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(true);
                }}/>)
            })}
           </div>
            </div>
        </div>
        
        {modalShow && <Modal onModalClose={()=>{
            setModalShow(false);
        }} animal={selectedAnimal}
        isBird={isBird}/> }

        </>
    )
}

export default Gallery;