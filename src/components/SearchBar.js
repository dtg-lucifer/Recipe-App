import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"

const SearchBar = () => {

    const navigator = useNavigate();
    const [input, setInput] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        navigator(`/search/${input}`)
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            <FaSearch />
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
        </StyledForm>
    );
};

const StyledForm = styled.form`
    margin: 2rem 20rem;
    position: relative;
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 5rem;
        border-radius: 1rem;
        outline: none;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
        font-size: 1.5rem;
    }
`;

export default SearchBar;
