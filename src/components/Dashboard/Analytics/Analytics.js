import React, { useState } from 'react';
import "./Analytics.css";
import defaultImg from '../../../images/default-img.png';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Analytics = () => {
    const { user, setUser, setPhotoURL, setName, DashboardUserProfileUpdate } = useAuth();
    const profileImg = user.photoURL || defaultImg;




    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', '51f041c634bfd2eb93753a4a062971a0');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                if (response.data.success) {
                    setPhotoURL(response.data.data.display_url)
                    setName(user.displayName)
                    const newUser = { email: user.email, displayName: user.displayName, photoURL: response.data.data.display_url };
                    setUser(newUser)
                    DashboardUserProfileUpdate(newUser)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div>
            <div className="text-right">
                <div>
                    <span>{user.displayName}</span>
                    <button className="profile-img-button rounded-circle" onClick={() => document.getElementById('image-upload').click()}>
                        <img src={profileImg} className="profile-img rounded-circle" alt="" />
                    </button>
                    <input type="file" id='image-upload' className='form-control' hidden onChange={handleImageUpload} />
                </div>
            </div>
            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">720</h3>
                                <p className="fs-5">Products</p>
                            </div>
                            <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">4920</h3>
                                <p className="fs-5">Sales</p>
                            </div>
                            <i
                                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3899</h3>
                                <p className="fs-5">Delivery</p>
                            </div>
                            <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%25</h3>
                                <p className="fs-5">Increase</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;