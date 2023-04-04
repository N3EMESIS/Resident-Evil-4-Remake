import './App.css';
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import Characters from "./Components/Characters/Characters";
import Enemies from "./Components/Enemies/Enemies";
import Nav from "./Components/Nav/Nav";
import Detail from "./Components/Detail/Detail";

const URL = "http://localhost:3001/residentevil4remake";


function App() {

  const [characters, setCharacters] = useState([]);

  //************************************************************ CERRAR Y BUSCAR ****************************************/

  function onSearch(character) {
    const characterId = parseInt(character);
    const isDuplicate = characters.some((char) => char.id === characterId);

    if(isDuplicate) {
      return window.alert("Ya has agregado a ese personaje");
    }

    fetch(`${URL}/detail/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name){
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
  }

  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  }

  //**************************************************************** PERSONAJE RANDOM *****************************************/

  function handleRandom() {
    const randomId = Math.floor(Math.random() * 24) + 1;
    fetch(`${URL}/onsearch/${randomId}`)
      .then((response) => response.json())
      .then((data) => {
        const isDuplicate = characters.some((char) => char.id === data.id);

        if(isDuplicate) {
          return window.alert("Ya has agregado este personaje");
        }

        setCharacters((oldChars) => [...oldChars, data]);
      })
  }

  // const navigate = useNavigate();
  const location = useLocation();

  const showNav = location.pathname !== "/";

  return (
    <div className="App" style={{ padding: "25px" }}>
      {showNav && <Nav onSearch={onSearch} handleRandom={handleRandom} characters={characters} />}
      <hr />
      <Routes>
        <Route path="/" element={<Characters characters={characters} onClose={onClose} />} /> 
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/enemies" element={<Enemies />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
