import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../../images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
            <Container className="mt-2">
                <img src={bannerImg} className="home-banner-img w-100" alt="" />
            </Container>
            <Container>

            </Container>
        </>
    );
};

export default Home;