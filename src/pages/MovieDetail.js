import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../MovieState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        const currentMovie = movies.filter((m) => m.url === url);
        setMovie(currentMovie[0]);

    }, [url, movies]);


    return (
        < Details variants={pageAnimation} initial="hidden" animate='show' exit="exit">
            <HeadLine>
                <h1>{movie?.title}</h1>
                <img src={movie?.mainImg} alt="main" />
            </HeadLine>
            <Awards>
                {movie?.awards.map((award) => (
                    <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie?.secondaryImg} alt="secondary" />
            </ImageDisplay>
        </Details >
    )
};

const Award = ({ title, description }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
};

const Details = styled(motion.div)`
    color: white;
`

const HeadLine = styled.div`
    min-height:90vh;
    padding-top:20vh;
    position:relative;

    h2{
        position:absolute;
        top:10%;
        left:50%;
        transform: translate(-50%, -10%);
    }

    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`
const ImageDisplay = styled.div` 
    min-height: 50vh;

    img{
        width:100%;
        height:100vh;
        object-fit:cover;
    }
`
const Awards = styled.div`
    min-height:80vh;
    display: flex;
    margin:5rem 10rem;
    justify-content: space-around;
    align-self: center;
`

const StyledAward = styled.div`
    padding:5rem;
    h3{
        font-size: 2rem;
    }

    .line{
        width:100%;
        background-color: #23d997;
        height:0.3rem;
        margin:1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
export default MovieDetail;