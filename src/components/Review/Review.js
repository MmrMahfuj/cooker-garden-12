import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../hooks/useAuth';
import reviewImg from '../../images/review.png'
import { Col, Container, Row } from 'react-bootstrap';



const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0)

    const ratingChanged = (newRating) => {
        setRating(newRating);
        console.log(rating);
    };

    const onSubmit = data => {
        data.rating = rating
        data.email = user.email
        data.displayName = user.displayName
        axios.post('https://hidden-retreat-64560.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Added Successfully!", "You clicked the button!", "success");
                    reset()

                }
            })
    };


    return (
        <div className="custom-height d-flex justify-content-center align-items-center">
            <Container className="d-flex justify-content-center">
                <div className="w-md-50">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Add Your Review</h3>
                        <label className="mt-3 d-flex justify-content-start">Review</label>
                        <textarea required rows="5" className="w-100 p-2  input-field" {...register("review",)} />
                        <br />
                        <div className="d-flex justify-content-center">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={50}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <input type="submit" className="regular-btn mt-2" value="ADD Review" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Review;