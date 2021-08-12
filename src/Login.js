import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push('/')
        }).catch(error => alert(error.message));

    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // It successfully created account for a user
            console.log(auth);

            if(auth) {
                history.push('/')
            }


        }).catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://www.gs1es.org/wp-content/uploads/2016/02/Amazon-Logo-PNG.png'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signinButton' onClick={signIn} >Sign In</button>

                    <p>By Signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                    <button className='login__registerButton' onClick={register} >Create your Amazon account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
