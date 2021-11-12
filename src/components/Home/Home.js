import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../images/banner.jpg';
import './Home.css';
import Slider from "react-slick";
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import Product from '../Product/Product';
import bannerVideo from '../../images/banner.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faTrophy, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faClock, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import middleBanner from '../../images/middle-img2.jpg';







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
        fetch('https://hidden-retreat-64560.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    const settings = {
        // dots: true,
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
            <div className="w-100  banner-container">
                <video width="100%" height="auto" autoPlay="true" loop muted class="banner-video shadow-lg">
                    <source class="desktop_auto_video" src={bannerVideo} type="video/mp4" />
                </video>
            </div>
            <div>
                <img src={bannerImg} className="w-100 banner-img-top my-5" alt="" />
            </div>
            <Container fluid="xxl" className="my-5 custom-height">
                <h2 className="pt-4 mb-3 text-start product-title">Customer's Favorite</h2>
                {
                    <Row className="g-4">
                        {
                            allProducts.slice(-6).map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                }
            </Container>
            <Container fluid="xxl" className="custom-height d-flex align-items-center">
                <img src={middleBanner} className="w-100 shadow-lg" alt="" />
            </Container>
            <Container fluid="xxl" className=" custom-height d-flex align-items-center">
                <div className="">
                    <h2 className="pt-4 mb-3 pb-3 text-start product-title">Why We Should Be Your Top Choice</h2>
                    <Row className="g-4">
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faHourglassHalf} />
                                <li className="service-li">Quick Response Times</li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faFilePdf} />
                                <li className="service-li">Licensed Electricians</li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faUserTie} />
                                <li className="service-li">
                                    Experienced and Accessible
                                </li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faTrophy} />
                                <li className="service-li">
                                    Super Service Award
                                </li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faClock} />
                                <li className="service-li">
                                    Over 60 years of experience
                                </li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faCheckCircle} />
                                <li className="service-li">
                                    Genuine Products
                                </li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faUserShield} />
                                <li className="service-li">
                                    Safe & Secure Payment
                                </li>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="service-box">
                                <FontAwesomeIcon className="service-icon" icon={faUserShield} />
                                <li className="service-li">
                                    Free & Easy Return
                                </li>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid="xxl" className=" custom-height ">
                <div className="align-self-center">
                    <h2 className="pt-4 mb-3 text-start product-title">Top Reviews</h2>

                    <Slider {...settings}>
                        {
                            review.map(review => <ReviewSlider
                                key={review._id}
                                review={review}
                            ></ReviewSlider>).reverse()
                        }
                    </Slider>


                </div>

            </Container>



        </>
    );
};

export default Home;


/*
 div Irrelevant code

 <h2 class="banner-video-text">
                    This is the future <br />of cooking.
                </h2>

 */