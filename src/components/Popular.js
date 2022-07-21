import React, { useEffect, useState } from "react";
import "../css/popular.css";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetchPopularRecipes();
    }, []);

    const fetchPopularRecipes = async () => {
        const checkPopular = sessionStorage.getItem("Popular");
        if (checkPopular) {
            setPopular(JSON.parse(checkPopular));
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_TWO}&number=9`
            );
            const data = await response.json();
            sessionStorage.setItem("Popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="popular__container"
        >
            <h2 className="main__title">Popular Picks</h2>
            <Splide
                options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    autoplay: true,
                    resetProgress: true,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    drag: "free",
                    gap: "3rem",
                    interval: 1
                }}
            >
                {popular.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <Card
                                title={recipe.title}
                                img={
                                    recipe.image
                                        ? recipe.image
                                        : "https://unsplash.it/400"
                                }
                                alt={recipe.title}
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </motion.div>
    );
};

export default Popular;
