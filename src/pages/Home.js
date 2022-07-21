import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import "../css/home.css";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
        >
            <Popular />
            <Veggie />
        </motion.div>
    );
};

export default Home;
