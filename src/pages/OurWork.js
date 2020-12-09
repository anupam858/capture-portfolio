import React from 'react';
import athlete from '../img/athlete-small.png';
import racer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fade, photoAnim, pageAnimation, LineAnim, slider, sliderContainer } from './animation';


const OurWork = () => {

    return (
        <Work style={{ background: "#fff" }} variants={pageAnimation} initial="hidden" animate='show' exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athelete</motion.h2>
                <motion.div className="line" variants={LineAnim}></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide><motion.img src={athlete} alt="the athlete" variants={photoAnim} /></Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2>The Racer</motion.h2>
                <div className="line"></div>
                <Link to='/work/the-racer'><img src={racer} alt="the Racer" /></Link>
            </Movie>
            <Movie>
                <motion.h2>The Good Time</motion.h2>
                <div className="line"></div>
                <Link to='/work/good-times'><img src={goodtimes} alt="the Good times" /></Link>
            </Movie>
        </Work>
    );
};


const Work = styled(motion.div)`
    min-height:100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`

    padding-bottom:5rem;

    .line{
        height:0.2rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height:70vh;
        object-fit:cover;
    }

`;

const Hide = styled.div`
    overflow: hidden;
`

const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:0%;
    width:100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;