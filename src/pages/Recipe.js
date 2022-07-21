import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("INSTRUCTIONS");
    const INSTRUCTIONS_REF = useRef();
    const params = useParams();
    const fetchDetails = async () => {
        const rawData = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY_TWO}`
        );
        const jsonData = await rawData.json();
        setDetails(jsonData);
    };
    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    return (
        <DetailWrapper
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="container"
            >
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </motion.div>
            <Info>
                <Button
                    className={activeTab === "INSTRUCTIONS" && "active"}
                    onClick={() => setActiveTab("INSTRUCTIONS")}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === "INGREDIENTS" && "active"}
                    onClick={() => setActiveTab("INGREDIENTS")}
                >
                    Ingredients
                </Button>
                {activeTab === "INSTRUCTIONS" ? (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h3>
                        <h4>Instructions for this recipe :-</h4>
                        <h3
                            ref={INSTRUCTIONS_REF}
                            className="instructions"
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></h3>
                    </div>
                ) : (
                    <ul className="ingredients">
                        {details.extendedIngredients.map((ing) => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
};

const DetailWrapper = styled(motion.div)`
    width: 70%;
    margin: 10rem auto 5rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white !important;
    }
    h2 {
        margin-bottom: 2rem;
        font-size: 18px;
        text-align: center;
    }
    li {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    img {
        border-radius: 1rem;
        box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 1);
    }
    div.container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
        box-sizing: border-box;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
    font-size: 10px !important;
    margin: 0 1rem;
    cursor: pointer;
    transition: background-color 0.15s;
    box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.7);
    &:hover {
        background-color: rgb(0 0 0 / 0.2);
    }
`;

const Info = styled.div`
    width: 500px;
    padding: 1.3rem 2rem 2rem 2rem;
    font-size: 13px;
    h3 {
        margin: 2rem 0;
    }
    h3.readmore {
        cursor: pointer;
    }
    h4 {
        color: rgb(0 0 0 / 0.5);
    }
`;

export default Recipe;
