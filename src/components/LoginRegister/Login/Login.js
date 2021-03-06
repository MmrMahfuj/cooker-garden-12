import React, { useState, } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { saveUser, signInUsingGoogle, signInEmailAndPassword, setError, error, setUser, setIsLoading } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        signInEmailAndPassword(email, password)
            .then(result => {
                setIsLoading(true)
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
                saveUser(result.user.email, result.user.displayName, 'PUT')
                setError('')
                // console.log(result.user);
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleCreateRegisterBtn = () => {
        history.push('/register')
    }

    return (
        <div className="cooker-login-container">
            {/* <h2 className="cooker-h2 login-website-title">Cooker Garden</h2> */}
            <div className="cooker-main-container" id="cooker-main-container">
                <div className="form-container sign-in-container">



                    <div className="cooker-form w-100">
                        <h1 className="cooker-h1">Sign in</h1>
                        <div className="social-container">

                            <button onClick={handleGoogleLogin} className="social-button"><FontAwesomeIcon className="social" icon={faGooglePlusG} /></button>
                        </div>
                        <form className="" onSubmit={handleLogin}>
                            <span className="cooker-span">or use your account</span>
                            <input className="cooker-input" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                            <input className="cooker-input" onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                            <p className="text-danger my-2">{error}</p>
                            <p><Link to="/register">Create an account</Link></p>
                            <input type="submit" value="Sign In" className="cooker-button" />
                        </form>
                    </div>



                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="cooker-h1">Welcome Back!</h1>
                            <p className="cooker-p">To keep connected with us please login with your personal info</p>
                            <button className="ghost cooker-button" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="cooker-h1">Hello, People!</h1>
                            <p className="cooker-p">Enter your personal details and start journey with us</p>
                            <button onClick={handleCreateRegisterBtn} className="ghost cooker-button" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;