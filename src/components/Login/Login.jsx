import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const [show, setShow] = useState(false)

    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

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
            navigate(from, { replace: true })
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
                    <input type={show ? 'text' : 'password'} name="password" id="password" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                          show ? <span>hide</span> : <span>show</span>
                        }
                    </small></p>
                </div>
                <input type="submit" className='btn-submit' value="login" />
            </form>
            <p><small>New to Ema-john? <Link to='/signup'>SignUp now</Link></small></p>
        </div>
    );
};

export default Login;