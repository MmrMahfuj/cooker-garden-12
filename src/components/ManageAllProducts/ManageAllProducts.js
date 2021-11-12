import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageAllProducts.css';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'





const ManageAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://hidden-retreat-64560.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [control])


    const handleRemoveProduct = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your Product has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your Product is safe!");
                }

                if (willDelete) {
                    fetch(`https://hidden-retreat-64560.herokuapp.com/deleteProduct/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount) {
                                setControl(!control);
                            } else {
                                setControl(false);
                            }
                        });
                }
            });
    }


    return (
        <div className="custom-height">
            <Container>
                <div className="allProducts-page-height">
                    <h3>Products List: {allProducts?.length}</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Model</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts?.map((product, index) => (

                                <tr key={product._id}>
                                    <td>{index}</td>
                                    <td><img src={product?.img} className="manageProduct-img " alt="" /></td>
                                    <td><h6 className="fw-bolder">{product?.title}</h6></td>
                                    <td>{product?.model}</td>
                                    <td><button onClick={() => handleRemoveProduct(product?._id)} className="btn bg-danger text-white p-2 mt-2"><FontAwesomeIcon icon={faTrashAlt} /></button><br /></td>



                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default ManageAllProducts;


/*
<button className=" small-btn" onClick={() => handleStatus(product?._id)}>accept</button>




const proceed = window.confirm('Are you sure, you want to delete');

        if (proceed) {
            fetch(`https://hidden-retreat-64560.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                });
        }
*/