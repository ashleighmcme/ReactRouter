import React from "react";
import { Route, Routes } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Orange from "./Orange";
import Aqua from "./Aqua";
import White from "./White";


export default function MainContainer() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route path="/Orange" element={<Orange />} />
                <Route path="/Aqua" element={<Aqua />} />
                <Route path="/White" element={<White />} />
            </Routes>
        </div>
    );
}
