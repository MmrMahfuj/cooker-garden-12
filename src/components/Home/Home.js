import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import bannerImg from '../../images/banner.jpg';
import './Home.css';
import Slider from "react-slick";
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import Product from '../Product/Product';




const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://hidden-retreat-64560.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])



    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <Container className="mt-2">
                <img src={bannerImg} className="home-banner-img w-100" alt="" />
            </Container>
            <Container className="my-5 custom-height">
                <h2 className="pt-4 mb-3 text-start product-title">Customer's Favorite</h2>
                {
                    <Row className="g-4">
                        {
                            allProducts.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                }
            </Container>
            <Container className="my-5">
                <h2 className="pt-4 mb-3 text-start product-title">Top Reviews</h2>
                <Slider {...settings}>
                    {
                        review.map(review => <ReviewSlider
                            key={review._id}
                            review={review}
                        ></ReviewSlider>)
                    }
                </Slider>
            </Container>

        </>
    );
};

export default Home;