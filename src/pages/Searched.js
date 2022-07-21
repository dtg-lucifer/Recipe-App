import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searched = () => {
    const [items, setItems] = useState([]);
    const param = useParams();

    const getSearchedItems = async (term) => {
        const rawData = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_TWO}&query=${term}`
        );
        const jsonData = await rawData.json();
        setItems(jsonData.results);
    };

    useEffect(() => {
        getSearchedItems(param.term);
    }, [param.term]);

    return (
        <Grid>
            {items.map((item) => (
                <Link key={item.id} to={`/recipe/${item.id}`}>
                    <Card>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Card>
                </Link>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
    max-width: 70%;
    margin: 5rem auto;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
        box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 1);
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
        font-size: 15px;
    }
`;

export default Searched;
