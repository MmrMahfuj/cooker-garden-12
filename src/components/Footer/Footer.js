import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="custom-footer">
            <Container className="py-3">
                <Row>
                    <Col md={3}>
                        <h4 className="mt-2">Websites</h4>
                        <li className="footer-li">America's Test Kitchen</li>
                        <li className="footer-li">Cook's Illustrated</li>
                        <li className="footer-li">Cook's Country</li>
                        <li className="footer-li">Online Cooking School</li>
                        <li className="footer-li">ATK Shop</li>
                        <li className="footer-li">ATK Kids</li>
                    </Col>
                    <Col md={3}>
                        <h4 className="mt-2">Magazines</h4>
                        <li className="footer-li">Cook's Illustrated</li>
                        <li className="footer-li">Give Cook's Illustrated</li>
                        <li className="footer-li">Cook's Country</li>
                        <li className="footer-li">Give Cook's Country</li>
                        <li className="footer-li">Digital Magazines</li>
                        <li className="footer-li">Be a Recipe Tester</li>
                    </Col>
                    <Col md={3}>
                        <h4 className="mt-2">Customer Service</h4>
                        <li className="footer-li">Website FAQs</li>
                        <li className="footer-li">Magazine FAQs</li>
                        <li className="footer-li">Contact Us</li>
                        <li className="footer-li">Manage Email Preferences</li>
                        <li className="footer-li">Give a Gift Membership</li>
                        <li className="footer-li">Redeem a Gift Membership</li>
                    </Col>
                    <Col md={3}>
                        <div className="my-4">
                            <span className="me-3 custom-icon">
                                <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
                            </span>
                            <span className="me-3 custom-icon">
                                <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
                            </span>
                            <span className="me-3 custom-icon">
                                <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
                            </span>

                            <span className="me-3 custom-icon">
                                <FontAwesomeIcon className="footer-icon" icon={faYoutube} />
                            </span>
                            <span className="me-3 custom-icon">
                                <FontAwesomeIcon className="footer-icon" icon={faPinterest} />
                            </span>

                        </div>
                        <h5 className="">Sign up for our cooking newsletter</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text regular-btn" id="basic-addon2">SUBMIT</span>
                        </div>


                    </Col>
                </Row>
                <hr />
                <footer>
                    <h6 className="copyright-color">&copy; Cooker Garden 2021 Made With &hearts; by Mahfuj</h6>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;


{/* <img src={logo2} className="footer-logo mt-2" alt="" /> */ }