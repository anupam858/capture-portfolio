import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
    const [Toggle, setToggle] = useState(false);

    return (
        <StyledDiv layout className="question" onClick={() => setToggle(!Toggle)}>
            <motion.h4 layout style={{ cursor: 'pointer' }}>{title}</motion.h4>
            {Toggle ? children : ""}
            <div className="faq-line"></div>
        </StyledDiv>
    );
};

const StyledDiv = styled(motion.div)`
    cursor: pointer;
`

export default Toggle;