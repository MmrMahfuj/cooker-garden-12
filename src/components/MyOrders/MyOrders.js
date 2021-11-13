import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';
import './MyOrders.css';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {

        fetch(`https://hidden-retreat-64560.herokuapp.com/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [control, user.email])




    // handle DELETE orders
    const handleRemoveOrders = id => {
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


    return (
        <div className="custom-height">
            <Container>
                <div className="allorderss-page-height">
                    <h3>My Orders List: {myOrders?.length}</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Payment</th>
                                <th>Order</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders?.map((orders, index) => (

                                <tr key={orders._id}>
                                    <td>{index}</td>
                                    <td><img src={orders?.productImg} className="manageProduct-img " alt="" /></td>
                                    <td><h6 className="fw-bolder">{orders?.productName}</h6><br />
                                        ({orders.productModel})
                                    </td>
                                    <td>${orders?.productPrice}</td>
                                    <td>COD</td>
                                    <td>{orders?.status}</td>

                                    <td><button onClick={() => handleRemoveOrders(orders?._id)} className="btn bg-danger text-white p-2 mt-2"><FontAwesomeIcon icon={faTrashAlt} /></button><br /></td>


                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyOrders;