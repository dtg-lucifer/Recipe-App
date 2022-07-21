import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/cuisine.css";

const Cuisine = () => {
    const params = useParams();
    const [cuisine, setCuisine] = useState([]);
    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_TWO}&cuisine=${name}`
        );
        const jsonData = await data.json();
        setCuisine(jsonData.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid__container"
        >
            {cuisine.map((item) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card"
                    key={item.id}
                >
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Cuisine;
