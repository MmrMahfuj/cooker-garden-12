import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import exploreBanner from '../../images/explore-banner.jpg';

const Explore = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://hidden-retreat-64560.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <>
            <div>
                <img src={exploreBanner} className="w-100 shadow-lg" alt="" />
            </div>
            <Container fluid="xxl" className="my-5">
                <Row className="g-4">
                    {
                        allProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Explore;