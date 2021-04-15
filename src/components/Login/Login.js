import React, { useContext } from 'react';
import './Login.css';
import logo from '../images/logo.png';
import google from '../images/google.png';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
console.log(userInfo);
    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log("google login clicked");
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => { 
                var credential = result.credential; 
                var token = credential.accessToken;
                sessionStorage.setItem(token) 
                var user = result.user;
                setUserInfo(user) 
            }).catch((error) => { 
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }



    return (
        <main className="loginBody">
            <div className="container">
                <div className="">
                    <div className="mb-5 text-center">
                        <Link to="/home"><img className="mt-5" src={logo} alt="" /></Link>

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