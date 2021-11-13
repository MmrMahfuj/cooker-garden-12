import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../hooks/useAuth';

const OrderProceed = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const { user } = useAuth();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.orderTime = new Date().toLocaleTimeString()
        data.orderDate = new Date().toLocaleDateString()
        data.status = "Pending"
        data.productName = product.title
        data.productImg = product.img
        data.productModel = product.model
        data.productPrice = product.price
        data.email = user.email

        console.log(data);
        axios.post('https://hidden-retreat-64560.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Ordered Successfully Done!", "You Clicked Okay And Happy!", "success");
                    reset()
                    history.push('/dashboard/myOrders')

                }
            })
    };


    useEffect(() => {
        fetch(`https://hidden-retreat-64560.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])


    return (
        <div className="custom-height mt-3">
            <Container>
                <Row>
                    <Col md={6}>


                        <img src={product.img} className="img-product img-fluid" alt="" />

                        <div className="p-3">
                            <h4 className="text-left fw-bold">{product.title}</h4>
                            <p className="text-left">{product.shortDes}</p>
                            <p className="text-left">{product.model}</p>
                            <p className="text-left">{product.des}</p>
                            <h4 className="text-left">Price ${product.price}</h4>

                        </div>


                    </Col>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">

                                <label className="d-flex justify-content-start">Full Name</label>
                                <input type="text" required className="w-100 p-2  input-field" {...register("name")} /><br />
                                <label className="mt-3 d-flex justify-content-start">Email</label>
                                <input type="email" required className="w-100 p-2  input-field" {...register("currentEmail")} /><br />
                                <label className="mt-3 d-flex justify-content-start">Phone number</label>
                                <input required className="w-100 p-2  input-field" type="number" {...register("phone")} /><br />
                                <label className="mt-3 d-flex justify-content-start">City</label>
                                <input required className="w-100 p-2  input-field" {...register("city")} /><br />

                                <label className="mt-3 d-flex justify-content-start">location</label>
                                <textarea required className="w-100 p-2  input-field" {...register("location",)} />
                                <br />
                                <label className="mt-3 d-flex justify-content-start">Instruction</label>
                                <textarea rows="5" placeholder="Optional" className="w-100 p-2  input-field" {...register("instruction",)} />
                                <br />
                            </div>
                            <input type="submit" className="regular-btn w-25 mt-2" value="Confirm" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderProceed;