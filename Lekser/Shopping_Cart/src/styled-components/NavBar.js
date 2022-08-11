import styled from "styled-components";

export const NavBar = styled.nav `
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 1em;
    font-weight: bold;
`

export const Cart = styled.div `
    position: relative;
`


export const CartCount = styled.span `
    position: absolute;
    top: -8px;
    right: -10px;
    color: #fff;
    background: #ff3e6c;
    font-weight: 500;
    border-radius: 50%;
    font-size: 11px;
    width: 22px;
    height: 22px;
    text-align: center;
    line-height: 22px;
`