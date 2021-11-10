import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div>
            <h2>this is manage All products: {allProducts.length}</h2>
        </div>
    );
};

export default ManageAllProducts;