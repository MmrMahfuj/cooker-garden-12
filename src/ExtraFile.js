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




// old register code 

<div className="py-5 bg-color">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="container-lg m-2 mx-auto">
                            <div className="login mx-auto p-3">
                                <form onSubmit={handleRegistration}>
                                    <h3 className="mb-5 custom-auth-title">REGISTER</h3>
                                    <input onBlur={handleNameChange} required className="m-2 p-2 w-75" type="text" name="" id="name" placeholder="Your Name" /><br />

                                    <input onBlur={handleEmailChange} required className="m-2 p-2 w-75" type="email" name="" id="email" placeholder="Your Email" /><br />

                                    <input onBlur={handlePasswordChange} required className="m-2 p-2 w-75" type="password" name="" id="password" placeholder="Your Password" /><br />
                                    <p className="text-danger mt-2">{error}</p>
                                    <br />

                                    <input className="w-75 regular-btn p-2 rounded text-white" type="submit" value="Register" />


                                </form>

                                <p className="mt-2">I have an account? <Link to="/login">Login</Link></p>
                            </div>

                        </div>


                    </Col>
                    <Col className="align-self-center"><img src={registerImg} alt="" className="img-fluid" /></Col>
                </Row>
            </Container>
        </div>





//  sin up container 
<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>


<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>