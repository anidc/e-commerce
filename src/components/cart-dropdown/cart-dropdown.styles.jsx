import styled from "styled-components"
import Button from "../button/button.component"

export const CartDropdownWrapper = styled.div`
    position: relative;
    display: flex;
`

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    top: 30px;
    right: -15px;
    z-index: 5;
    transition: 0.3s ease-in-out;  
    @media (max-width: 1555px) {
        margin: 0 20px;
        transition: 0.1s ease-in-out;
    }  
    ${Button}{
        
    }
`

export const CartItems = styled.div`
    height: 270px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const EmptyMessage = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

// Button {
//     width: 100%;
// }