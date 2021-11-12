<div className="py-5 bg-color">
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <div className="container-lg m-2 mx-auto">
                            <div className="login mx-auto p-3">
                                <form onSubmit={handleLogin}>
                                    <h3 className="mb-5 custom-auth-title">LOGIN</h3>
                                    <input className="m-2 p-2 w-75" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required /><br />

                                    <input className="m-2 p-2 w-75" onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" required /><br />
                                    <div className="d-flex justify-content-around mt-3">
                                        <span>
                                            <input type="checkbox" name="" id="" className="m-1 text-start" />
                                            <label htmlFor="vehicle2"> Remember Me</label>
                                        </span>
                                        <span>
                                            {/* <Link>Forget Password</Link> */}
                                            </span>
                                            </div>
                                            <br />
                                            <p className="text-danger mt-2">{error}</p>
                                            <input className="w-75 mt-3 p-2 rounded text-white regular-btn " type="submit" value="Login" />
        
                                        </form>
        
                                        <p className="mt-2">Don't have an account? <Link to="/register">Create an account</Link></p>
                                    </div>
        
                                </div>
                                <div>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                        OR
                                        <Col>
                                            <hr /></Col>
                                    </Row>
                                </div>
                                <div className="login-another mx-auto mb-4 ">
                                    <button className="w-50 text-white py-2 rounded-pill regular-btn" onClick={handleGoogleLogin}>
                                        <img src={googleImg} className="google-img" alt="" />
                                        Google Sign In</button>
                                </div>
        
                            </Col>
                            <Col md={6} className="align-self-center">
                                <img src={loginImg} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </div>



















// review page 
<Row>
                    <Col md={6}>
                        <img src={reviewImg} className="img-fluid" alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="">
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
                    </Col>
                </Row>