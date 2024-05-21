import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Component/Blue.jsx';
import Red from './Component/Red.jsx';
import Home from './Component/Home.jsx';
import Orange from "./Component/Orange.jsx";
import Aqua from "./Component/Aqua.jsx";
import White from "./Component/White.jsx";
import Navbar from './Component/Nav-Bar.jsx';
import MainContainer from './Component/MainSection.jsx';
import Footer from './Component/footer.jsx';

function App() {
  return (
    <>
      <div id="container">
        < Navbar />
        < MainContainer />
        < Footer />
      </div>


    </>
  )
}

export default App
