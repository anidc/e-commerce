import styled from "styled-components"

export const BaseButton = styled.button`
    min-width: 135px;
    height: 40px;
    padding: 0 35px;
    font-size: 15px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    transition: 0.4s ease-in-out;
    align-items: center;
    font-family: "Open Sans";
    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: #fff;

    &:hover {
        background-color: #4286f4b7;
        border: 1px solid transparent;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
        background-color: #000;
        color: #fff;
        border: 1px solid transparent;
    }
`