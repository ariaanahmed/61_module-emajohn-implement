import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut().then(() => {}).catch((error) => {
            console.log(error)
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {user && <span style={{color: 'white', paddingLeft: '5px'}}>welcome, {user.email}
                    <button style={{backgroundColor: 'white'}} onClick={handleLogOut}>Sign out</button>
                </span>}
            </div>
        </nav>
    );
};

export default Header;