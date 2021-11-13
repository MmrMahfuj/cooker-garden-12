import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserCheck, faShoppingBasket, faCheckSquare, faTruck, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch('https://hidden-retreat-64560.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, [control])

    // console.log(allOrders);

    // handle DELETE orders
    const handleRemoveorders = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Orders!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof!  Orders has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Orders is safe!");
                }

                if (willDelete) {
                    fetch(`https://hidden-retreat-64560.herokuapp.com/deleteOrders/${id}`, {
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


    // handle ORDER status 
    const handleStatus = (id, statusName) => {
        const status = { status: statusName }
        // console.log(statusName);
        const url = `https://hidden-retreat-64560.herokuapp.com/ordersStatus/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Updated Successfully!", "You Happy!", "success");
                    setControl(!control);
                }
                else {
                    setControl(false);
                }
            });

    }


    return (
        <div className="custom-height">
            <Container>
                <div className="allorderss-page-height">
                    <h3>Orders List: {allOrders?.length}</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Model</th>
                                <th>Product Price</th>
                                <th>Status</th>
                                <th>Reject</th>
                                <th>Accept</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders?.map((orders, index) => (

                                <tr key={orders._id}>
                                    <td>{index}</td>
                                    <td><img src={orders?.productImg} className="manageProduct-img " alt="" /></td>
                                    <td><h6 className="fw-bolder">{orders?.productName}</h6></td>
                                    <td>{orders?.productModel}</td>
                                    <td>${orders?.productPrice}</td>
                                    <td>{orders?.status}</td>

                                    <td><button onClick={() => handleRemoveorders(orders?._id)} className="btn bg-danger text-white p-2 mt-2"><FontAwesomeIcon icon={faTrashAlt} /></button><br /></td>
                                    <td>
                                        {
                                            orders.status === "Pending" && <div>
                                                <button onClick={() => handleStatus(orders?._id, "Approved")} className="btn bg-success text-white p-2 mt-2"><FontAwesomeIcon icon={faShoppingBasket} /></button><br />
                                            </div>
                                        }

                                        {
                                            orders.status === "Approved" && <div>
                                                <button onClick={() => handleStatus(orders?._id, "On the way")} className="btn bg-success text-white p-2 mt-2"><FontAwesomeIcon icon={faTruck} /></button><br />
                                            </div>
                                        }
                                        {
                                            orders.status === "On the way" && <div>
                                                <button onClick={() => handleStatus(orders?._id, "Accepted Customer")} className="btn bg-success text-white p-2 mt-2"><FontAwesomeIcon icon={faTruckLoading} /></button><br />
                                            </div>
                                        }
                                        {
                                            orders.status === "Accepted Customer" && <div>
                                                <button onClick={() => handleStatus(orders?._id, "Delivered")} className="btn bg-success text-white p-2 mt-2"><FontAwesomeIcon icon={faUserCheck} /></button><br />
                                            </div>
                                        }
                                        {
                                            orders.status === "Delivered" && <div>
                                                <button disabled className="btn bg-success text-white p-2 mt-2"><FontAwesomeIcon icon={faCheckSquare} /></button><br />
                                            </div>
                                        }
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default ManageAllOrders;


/*
<FontAwesomeIcon icon={faTruck} />
faShoppingBasket

*/