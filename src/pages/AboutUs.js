import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';

const AboutUs = () => {

    return (
        <StyledAboutUs variants={pageAnimation} initial="hidden" animate='show' exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </StyledAboutUs>
    );

};

const StyledAboutUs = styled(motion.div)`
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
`;


export default AboutUs;