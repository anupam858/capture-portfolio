import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1><Link to="/" id='logo'>Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/"> 1. About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work"> 2. Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact"> 3. Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
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
    position:sticky;
    top:0;
    z-index:5;
    ul{
        display:flex;
        list-style:none;
    }
    li{
        padding-left: 5rem;
        position: relative;
        text-align:center;
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
    

    @media  (max-aspect-ratio: 1/1){
        flex-direction: column;
        padding: 1rem 2rem;

        ul{
            margin-top: 1rem;
        }
        li{
            padding-left: 2rem;
        }
    }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 55%;
  @media (max-width: 1300px) {
      left: 50%;
        bottom: -40%;
  }
`;

export default Nav;