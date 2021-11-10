import React from 'react';
import './Product.css';
import { Col, Button } from 'react-bootstrap';

const Product = ({ product }) => {
    const { title, model, shortDes, des, img, price } = product
    return (
        <>
            <Col md={6}>
                <div className="border product-cart d-flex justify-content-between">
                    <div> <img src={img} className="img-product" alt="" /></div>
                    <div className="p-3">
                        <h4 className="text-left fw-bold">{title}</h4>
                        <p className="text-left">{shortDes}</p>
                        <h4 className="text-left">Price ${price}</h4>
                        <Button className="regular-btn rounded-pill w-75">Buy Now</Button>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Product;