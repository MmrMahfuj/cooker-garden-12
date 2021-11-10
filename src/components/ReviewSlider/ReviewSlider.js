import React from 'react';
import ReactStars from "react-rating-stars-component";
import './ReviewSlider.css';

const ReviewSlider = (props) => {
    const { email, displayName, review, rating } = props.review
    return (
        <div className="p-2 m-3 border review-cart">
            <div className="text-center pt-2 align-self-center">
                <h4>{review}</h4>
                <h5>{displayName}</h5>
                <h6>{email}</h6>
                <div className="text-center  d-flex justify-content-center">
                    <ReactStars
                        count={5}
                        value={rating}
                        edit={false}
                        size={50}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;