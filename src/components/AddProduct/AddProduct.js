import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-retreat-64560.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset()

                }
            })
    };

    return (
        <>
            <div className="mx-auto mt-5 p-3 booking-box">
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-3">

                        <label className="d-flex justify-content-start">Name of the Product</label>
                        <input className="w-100 input-field" {...register("title", require)} /><br />
                        <label className="mt-3 d-flex justify-content-start">Product Model</label>
                        <input className="w-100 input-field" {...register("model", require)} /><br />
                        <label className="mt-3 d-flex justify-content-start">Short Description</label>
                        <textarea className="w-100 input-field" {...register("shortDes",)} />
                        <br />
                        <label className="mt-3 d-flex justify-content-start">Description</label>
                        <textarea className="w-100 input-field" {...register("des",)} />
                        <br />
                        <label className="mt-3 d-flex justify-content-start">image URL</label>
                        <input className="w-100 input-field" {...register("img", require)} /><br />
                        <label className="mt-3 d-flex justify-content-start">Product Price</label>
                        <input className="w-100 input-field" type="number" {...register("price", require)} />


                    </div>
                    <input type="submit" className="regular-btn" value="ADD PRODUCT" />
                </form>
            </div>
        </>
    );
};

export default AddProduct;