import React from 'react';
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import home2 from '../img/home2.png';

import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {

    const [element, control] = useScroll();
    return (
        <Services ref={element} variants={scrollReveal} animate={control} initial='hidden' >
            <Description>
                <h2>High <span>quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>We work efficiently.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Our prices are affordable.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>We believe in teamwork.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Services>
    )
}

export default ServicesSection;

const Services = styled(About)`

    h2{
        padding-bottom: 5rem;
    }
    p{

        width:80%;
        padding: 1rem 0rem 4rem 0rem;
    }

`

const Cards = styled.div`
     display:flex;
     flex-wrap:wrap;

    @media (max-aspect-ratio: 1/1) {
    width: 80vw;
    align-items: center;
    justify-content: space-evenly;
    padding-right:0;
  }
`

const Card = styled.div`

    flex-basis: 15rem;
    .icon{
        display:flex;
        align-items:center;
    }
    h3{
        padding-left:0.5rem;
    }
    @media (max-aspect-ratio: 1/1 ) {
        flex-basis:5rem;
        padding-left: 0.5rem;
    }
    
`