import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../css/veggie.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        fetchVeggieRecipes();
    }, []);

    const fetchVeggieRecipes = async () => {
        const checkVeggie = localStorage.getItem("Veggie");
        if (checkVeggie) {
            setVeggie(JSON.parse(checkVeggie));
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_TWO}&number=9`
            );
            const data = await response.json();
            localStorage.setItem("Veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };
    return (
        <div className="veggie__container">
            <h2 className="main__title">Vegiterian Picks</h2>
            <Splide
                options={{
                    perPage: 4,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: "3rem",
                }}
            >
                {veggie.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <Card
                                title={recipe.title}
                                img={recipe.image}
                                alt={recipe.title}
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Veggie;
