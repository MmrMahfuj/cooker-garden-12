import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Explore = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://hidden-retreat-64560.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <>
            <Container>
                <Row>
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