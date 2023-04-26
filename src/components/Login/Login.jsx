import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate('/')
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input type="submit" className='btn-submit' value="login" />
            </form>
            <p><small>New to Ema-john? <Link to='/signup'>SignUp now</Link></small></p>
        </div>
    );
};

export default Login;