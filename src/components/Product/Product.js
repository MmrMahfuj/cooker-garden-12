import React from 'react';
import { Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { title, model, shortDes, des, img, price } = product
    return (
        <>
            <Col md={4}>
                <div>
                    <img src={img} className="img-fluid" alt="" />
                    <h2>{title}</h2>
                    <h6>{model}</h6>
                    <p>{shortDes}</p>
                    <p>{des}</p>
                    <h4>Price ${price}</h4>
                </div>
            </Col>
        </>
    );
};

export default Product;