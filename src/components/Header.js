import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../css/header.css";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="nav__container">
            <div className="nav__top">
                <SearchBar />
            </div>
            <div className="nav__bottom">
                <HLink to={"/cuisine/italian"}>
                    <div className="nav__items">
                        <FaPizzaSlice />
                        {/* <h4>Italian</h4> */}
                    </div>
                </HLink>
                <HLink to={"/cuisine/american"}>
                    <div className="nav__items">
                        <FaHamburger />
                        {/* <h4>American</h4> */}
                    </div>
                </HLink>
                <HLink to={"/cuisine/thai"}>
                    <div className="nav__items">
                        <GiNoodles />
                        {/* <h4>Thai</h4> */}
                    </div>
                </HLink>
                <HLink to={"/cuisine/chinese"}>
                    <div className="nav__items">
                        <GiChopsticks />
                        {/* <h4>Chinese</h4> */}
                    </div>
                </HLink>
            </div>
        </div>
    );
};

const HLink = styled(NavLink)`
    &.active {
        .nav__items {
            background-color: transparent !important;
        }
        background: rgb(242, 113, 33);
        background: linear-gradient(
            90deg,
            rgba(242, 113, 33, 1) 0%,
            rgba(233, 64, 87, 1) 100%
        );
        border-radius: 50%;
    }
`;

export default Header;
