import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import About from "./screens/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./screens/contact/Contact";
import { Routes, Route } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import "./App.css";
import Animals from "./screens/animals/Animals";
import Modal from "./components/modal/Modal";

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [modalShow, setModalShow] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState([]);
    const [isBird, setIsBird] = useState(false);

  const windowSize = useWindowSize();
  

  const fetchData = async () => {
    const result = await axios
      .get("https://freetestapi.com/api/v1/dogs")
      .catch((error) => {
        console.log(error);
      });
      
    const resultCats = await axios
      .get("https://freetestapi.com/api/v1/cats")
      .catch((error) => {
        console.log(error);
      });

    const resultBirds = await axios
      .get("https://freetestapi.com/api/v1/birds")
      .catch((error) => {
        console.log(error);
      });

    if (
      result &&
      result.status === 200 &&
      resultBirds &&
      resultBirds.status === 200 &&
      resultCats &&
      resultCats.status === 200
    ) {
      setBirds(resultBirds.data);
      setCats(resultCats.data);
      setDogs(result.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <><div className="App">
     
        <Header dogs={dogs} cats={cats} birds={birds} onModalShow={(value)=>{
          setModalShow(true);
          setSelectedAnimal(value);
          setIsBird(false);
      }}/>
     
      <Routes>
        <Route
          element={<Home dogs={dogs} cats={cats} birds={birds} />}
          path="/"
        />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Animals dogs={dogs} cats={cats} birds={birds} />} path="/animals/:animalType" />
      </Routes>{" "}
      <Footer />
      
    </div>
    {modalShow && <Modal onModalClose={()=>{
            setModalShow(false);
        }} animal={selectedAnimal}
        isBird={isBird}/> }
    </>
    
  );
}

export default App;
