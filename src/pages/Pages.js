import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion"

const Pages = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/search/:term" element={<Searched />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
