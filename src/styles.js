import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
    display:flex;
    min-height:90vh;
    align-items:center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    scroll-snap-align: start;

    @media (max-aspect-ratio: 1/1){
        display: block;
        padding: 2.5rem 2rem;

    
    }
    
`
export const Description = styled.div`
    flex:1;
    padding-right:5rem;

    h2{
        font-weight: lighter;
    }

    @media (max-aspect-ratio: 1/1){
        padding-right: 0rem;
    }
`

export const Image = styled.div`
    flex: 1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit: cover;
    }
`
export const Hide = styled.div`
    overflow:hidden;
`