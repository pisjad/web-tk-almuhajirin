import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./Views/Beranda";
import Navbar from "./Views/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Beranda />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
