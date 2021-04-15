import React from 'react';
import './Login.css';
import logo from '../images/logo.png';
import google from '../images/google.png';
import { Link } from 'react-router-dom';


const Login = () => {


    const googleLogin = () => {
        console.log("google login clicked");
    }



    return (
        <main className="loginBody">
            <div className="container">
                <div className="">
                    <div className="mb-5 text-center">
                        <Link  to="/home"><img className="mt-5" src={logo} alt="" /></Link>

                    </div>

                    <div className="text-center">
                        <h1 className="my-3 text-light">Login with</h1>
                        <button onClick={googleLogin} className="px-5 py-1  googleLogin">
                            <img className="me-5" src={google} alt="" />
                                continue With Google
                        </button>
                        <h5 className="mt-5 text-secondary">Don't have an account? <Link className="text-light" to="/home">Create an account!</Link></h5>
                    </div>
                </div>

            </div>




        </main>
    );
};

export default Login;