import React from 'react';
import './Product.css';
import { Col, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { title, model, shortDes, img, price, _id } = product
    return (
        <>
            <Col md={6}>
                <div className="border product-cart d-flex justify-content-between">
                    <Row>
                        <Col>
                            <img src={img} className="img-product img-fluid" alt="" />
                        </Col>
                        <Col>
                            <div className="p-3">
                                <h4 className="text-left fw-bold">{title}</h4>
                                <p className="text-left">{shortDes}</p>
                                <h4 className="text-left">Price ${price}</h4>
                                <NavLink to={`/orderProceed/${_id}`}>

                                    <Button className="regular-btn rounded-pill w-75">Buy Now</Button>
                                </NavLink>
                            </div>
                        </Col>
                    </Row>


                </div>
            </Col>
        </>
    );
};

export default Product;