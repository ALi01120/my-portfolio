import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home_page from "./components/home";
import About from "./components/About";
import Skills from "./components/Skills";
import ServicePage from "./components/Service"; 
import GetInTouch from "./components/GetInTouch";

function App() {
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={<Home_page />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skill" element={<Skills />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/contact" element={<GetInTouch />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
}

export default App;
