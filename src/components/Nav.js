import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <StyledNav>
            <h1><Link to="/" id='logo'>Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/"> 1. About Us</Link>
                </li>
                <li>
                    <Link to="/work"> 2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact"> 3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )

}

const StyledNav = styled.nav`
    display:flex;
    min-height:10vh;
    margin:auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #282828;
    ul{
        display:flex;
        list-style:none;
    }
    li{
        padding-left: 5rem;
        position: relative;
    }
    a{
        text-decoration: none;
        color: white;
    }
    #logo{
        font-family: 'Lobster', cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }
`;

export default Nav;