import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
    max-width: 1400px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    width: 110px
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 5px;
    padding: 10px;
    &:hover {
        cursor: pointer;
        color: #969696;
        transition: 0.3s ease-in-out;
    }

`;