import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../pages/animation';
import Wave from './Wave';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Your <span>Dreams</span> come</motion.h2>

                    </Hide>
                    <Hide> <motion.h2 variants={titleAnim}>true.</motion.h2></Hide>
                    <motion.p variants={fade}> Contact us for any photography and videography ideas.<br></br>
                    We are professionals with amazing skills.
                    </motion.p>
                    <motion.button variants={fade}>Contact</motion.button>
                </motion.div>
            </Description>
            <Image>
                <motion.img src={home1} alt="Home" variants={photoAnim} />
            </Image>
            <Wave />
        </About>
    )
}

//Styled Component

export default AboutSection;