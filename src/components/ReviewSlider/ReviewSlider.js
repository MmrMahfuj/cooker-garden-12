import React from 'react';
import ReactStars from "react-rating-stars-component";
import './ReviewSlider.css';
import defaultImg from '../../images/default-img.png'
import useAuth from '../hooks/useAuth';
import reviewCodeImg from '../../images/reivew-code-img.jpg';

const ReviewSlider = (props) => {
    const { user } = useAuth();
    const { email, displayName, review, rating, photoURL } = props?.review;

    const reviewImg = photoURL || defaultImg;
    return (
        <div className="review-cart-container">
            <div className=" border review-cart">
                <img src={reviewImg} className="review-cart-img rounded-circle" alt="" />
                <div className="text-center pt-2 align-self-center">
                    <h5 className="my-3 text-start fw-bolder">{displayName}</h5>
                    <div className="d-flex justify-content-between">
                        <h6 className="customer-color">Customer</h6>
                        <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>

                    <div className="d-flex justify-content-between my-2">
                        <img src={reviewCodeImg} className="review-code-img" alt="" />
                        <span className="cooker-hr">----------------------------------------------</span>
                    </div>

                    <h6 className="align-self-center">{review}</h6>

                    <div className="text-center  d-flex justify-content-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;