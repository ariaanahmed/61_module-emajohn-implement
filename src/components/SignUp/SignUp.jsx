import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword)

        if(password !== confirmPassword){
            setError('Your password did not matched')
            return;
        } else if(password.length < 6){
            setError('password must be 6 characters or longer')
            return;
        }

        createUser(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        }).catch((error) => {
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required />
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p>{error}</p>
        </div>
    );
};

export default SignUp;