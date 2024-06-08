import React, {useState} from "react";
import "./animals.css"
import { useParams } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import Modal from "../../components/modal/Modal";

const Animals = ({dogs, cats, birds}) =>{
    const animal = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([]);
    const [isBird, setIsBird] = useState(false);

    
    return(
        <>
        <div className="animalWrapper mt-4">
            
            {animal.animalType==="dogs" && <div className="dogsCards d-flex gap-2 flex-column align-items-center w-100">
                <h4>Dogs</h4>
                <p> Discover a variety of dog breeds, each with unique traits and personalities.</p>
           <div className="cardContainer">
            {dogs.map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(false);
                }}/>)
            })}
          
           </div>
            </div>}
               {animal.animalType==="cats" && <div className="catsCards d-flex gap-2 flex-column align-items-center w-100">
            <h4>Cats</h4>
                <p>Learn about different cat breeds and their distinctive characteristics.</p>
           <div className="cardContainer">
           {cats.map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(false);
                }}/>)
            })}
           </div>
            </div>}
               {animal.animalType==="birds" &&  <div className="birdsCards d-flex gap-2 flex-column align-items-center w-100">
            <h4>Birds</h4>
                <p>Explore diverse bird species, each with its own vibrant colors and behaviors.</p>
            <div className="cardContainer">
            {birds.map((item, index)=>{
                return(<Cards origin={item.origin} name={item.name} image={item.image} key={item.id} onModalShow={()=>{
                    setModalShow(true);
                    setSelectedAnimal(item);
                    setIsBird(true);
                }}/>)
            })}
           </div>
            </div>}
           </div>

           {modalShow && <Modal onModalClose={()=>{
            setModalShow(false);
        }} animal={selectedAnimal}
        isBird={isBird}/> }
        </>
        
    )
} 

export default Animals;