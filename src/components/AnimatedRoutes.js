import React from "react";
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

/* Import Routes */
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import ProjectsDesign from "./ProjectsDesign";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects-design" element={<ProjectsDesign />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}