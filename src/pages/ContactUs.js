import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import { Hide } from '../styles';


const ContactUs = () => {

    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate='show' exit="exit" style={{ background: "white" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Send a message</h2>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Send an email</h2>

                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Social Media</h2>

                </Social>
            </Hide>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;
    color: #353535;

    @media (max-aspect-ratio: 1/1){
        padding: 2.5rem 2rem;
    }

`
const Title = styled.div`
    margin-bottom: 4rem;
    color:black;
`

const Circle = styled.div`
    border-radius:50%;
    width:2rem;
    height:2rem;
    background: #353535;
`
const Social = styled(motion.div)`
    display:flex;
    align-items: center;
    
    h2{
        margin: 1rem;
    }
`
export default ContactUs;