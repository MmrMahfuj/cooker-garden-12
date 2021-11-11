import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCompressAlt, faGlobeAmericas, faHandshake, faHeart, faMapMarkerAlt, faWrench, } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return (
        <div>
            <Container className="">
                <div className="custom-height d-flex align-items-center">
                    <div>
                        <h2 className="mb-4 fw-bolder">Why Shop at Best Electronics?</h2>
                        <Row>
                            <Col md={6}>
                                <p className="paragraph-justified paragraph-text">
                                    Best Electronics, a concern of Cooker Garden, is the fastest growing electronics retail company in Bangladesh. Our company was officially launched in 2013 with a clear vision of delivering world-class home appliances from all major global brands to the high-end consumer group of Bangladesh. In 2013, we started with just 12 showrooms in the country and by the grace of Almighty Allah, we have managed to open over 115 own showrooms in just 4.5 years. Over the years, we have managed to take authorized distributorship of almost all major home appliances brands around the world including Hitachi, Sharp, Panasonic, Whirlpool, Conion, Philips, V-Guard, Toshiba, Midea and many more. We also provide our own finance scheme for our customers to buy these world-class high end products, which we call the Super Kisti system. At Best Electronics, as of February 2018, we are generating employment for over 1,500 staffs.
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="paragraph-justified paragraph-text">
                                    We strongly believe that, in Bangladesh, only Best Electronics can provide you such massive collection of global brands and such massive collection of home appliances products. Starting from a simple LED Bulb to Japan’s Made Side-By-Side refrigerator, we have covered it all. In all our own showrooms nationwide, you can expect the same superior customer service. We feel proud to introduce our own service wing, Drooto, which is currently the No.1 company for Installation or Repair Services in Bangladesh. Through Drooto, we ensure that our honorable customers get the best after sales service. Drooto currently operates in over 10 major cities in Bangladesh including Dhaka, Tongi, Sirajganj, Bogra, Rangpur, Pabna, Jhenaidah, Khulna, Barisal and Feni. With over 13 service centers, Drooto directly employs over 100 dedicated technicians trained to provide on-demand services to a consumer within 3 days.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="custom-height d-flex align-items-center">
                    <div>
                        <Row>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faMapMarkerAlt} /></div>
                                <h4>Huge Sales Network</h4>
                                <p className="paragraph-text">As of February 2018, Best Electronics has over 115 showrooms in Bangladesh. All these showrooms are completely managed by our own staffs.</p>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faCompressAlt} /></div>
                                <h4>Largest Collection</h4>
                                <p className="paragraph-text">At Best Electronics, our honorable customers can enjoy a huge collection of over 700 electronics and electrical home appliances products..</p>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faGlobeAmericas} /></div>
                                <h4>Global Brands</h4>
                                <p className="paragraph-text">Over the years, we have earned the authorized distributorship of all major global brands like Hitachi, Sharp, Panasonic, Whirlpool, Toshiba and many more.</p>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faHeart} /></div>
                                <h4>Installment Payment System</h4>
                                <p className="paragraph-text">We ensure that your buying process is most easy and comfortable with us. Hence, we have introduced both Quick EMI and Super Kisti installment payment system.</p>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faWrench} /></div>
                                <h4>Nationwide Service Network</h4>
                                <p className="paragraph-text">With over 13 service centers in major cities of Bangladesh, we can proudly say that we have built a massive service network by working with our very own Drooto.</p>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 m-3"><FontAwesomeIcon className="about-icon" icon={faHandshake} /></div>
                                <h4>Trained Professionals</h4>
                                <p className="paragraph-text">Being the authorized distributor of all major global brands, our staffs are directly trained by the global brands to ensure superior customer satisfaction.</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;

// className="align-self-center"