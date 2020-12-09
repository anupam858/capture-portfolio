import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="questions">
                <AnimateSharedLayout>
                    <Toggle title='How do I start?'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repudiandae, magni tempora repellat mollitia illo asperiores dolorem error sapiente expedita culpa.</p>
                        </div>

                    </Toggle>

                    <Toggle title='Daily Schedule?'>


                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repudiandae, magni tempora repellat mollitia illo asperiores dolorem error sapiente expedita culpa.</p>
                        </div>

                    </Toggle>

                    <Toggle title="Different Payment Methods?">

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repudiandae, magni tempora repellat mollitia illo asperiores dolorem error sapiente expedita culpa.</p>
                        </div>
                    </Toggle>
                </AnimateSharedLayout>
            </div>
        </Faq>
    );
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height:0.2rem;
        margin: 1rem 0rem;
        width:100%;
    }
    .question{
        padding: 1rem 0rem;
        cursor: pointer;
    }
    .answer{

        p{
            padding: 1rem; 
        }
    }
`
export default FaqSection;