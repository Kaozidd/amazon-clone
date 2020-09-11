import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message))

    };

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    alt="header-logo"
                    src="https://previews.dropbox.com/p/thumb/AA7X1eM1lZO3L8vfliTSy3HP75GJLc0XiWAyH1Lhjp6qaS_TScTs7RLGDZlgCYtpNTAzaY5QE4Vp9nS3_21bNHdjrQRurXM7ues7jodywl_rYN4cUiyvwMwMHMuXKlX1bTA83XiWCMzrR23lC6YeqE1tw92oMvw11XPBmeu6nn4_kMFbxAkXtwItWs2BIwPEBw-b3hDkxCITf-EENYK2WSGKoyQKj4bB5HAU0Ps9ZYWtOBHgBp8_iEQqWm0sIPW0WxJZQZw8u07OLmBIxBfUuAWAa-JNrd1ez-An7AKtgLrPgDbStIdw_8sgyGHDY-j-bx2RyQQPN4uEjT0v6YCpi1TKSi9iKkJo76TisccVhWtfIw/p.png?size=1600x1200&size_mode=3"
                />
            </Link>
            <div className="login__container">

                <h1 className="login__title">Sign In</h1>

                <form>

                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                
                    <button 
                        className="login_signInButton"
                        type='submit'
                        onClick={signIn}
                    >Sign In</button>

                </form>

                <p>By signing-in you agree to Amazing's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button 
                    className="login_registerButton"
                    onClick={register}
                >Create your Amazing Account</button>

            </div>
        </div>
    )
}

export default Login;