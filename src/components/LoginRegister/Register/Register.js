import React, { useState } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import registerImg from '../../../images/register.jpg';
import useAuth from '../../hooks/useAuth';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';





const Register = () => {
    const { saveUser, registerEmailAndPassword, signInUsingGoogle, error, setError, name, setName, setUser, setIsLoading, userName } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return;
        };

        registerEmailAndPassword(email, password)

            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser)
                //user information send to database 
                saveUser(email, name, 'POST');
                userName();
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                saveUser(result.user.email, result.user.displayName, 'PUT')
                setError('')
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleLoginPageBtn = () => {
        history.push('/login')
    }

    return (
        <div className="cooker-login-container">
            {/* <h2 className="cooker-h2 login-website-title">Cooker Garden</h2> */}
            <div className="cooker-main-container  right-panel-active" id="cooker-main-container">
                <div className="form-container sign-up-container">



                    <div className="cooker-form w-100">
                        <h1 className="cooker-h1">Create Account</h1>
                        <div className="social-container">
                        </div>
                        <form className="" onSubmit={handleRegistration}>

                            <input onBlur={handleNameChange} required className="cooker-input" type="text" name="" id="name" placeholder="Your Name" /><br />
                            <input className="cooker-input" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                            <input className="cooker-input" onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                            <p className="text-danger my-2">{error}</p>
                            <p><Link to="/login">Have an account</Link></p>
                            <input type="submit" value="Sign Up" className="cooker-button" />
                        </form>
                    </div>



                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="cooker-h1">Welcome Back!</h1>
                            <p className="cooker-p">To keep connected with us please login with your personal info</p>
                            <button onClick={handleLoginPageBtn} className="ghost cooker-button" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="cooker-h1">Hello, People!</h1>
                            <p className="cooker-p">Enter your personal details and start journey with us</p>
                            <button onClick={handleLoginPageBtn} className="ghost cooker-button" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;