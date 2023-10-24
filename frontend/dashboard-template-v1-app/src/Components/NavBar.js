import React from 'react';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <nav className='main-body-navbar-bg'>
            <ul className='ul-nav'>
                <li className='li-nav'>Home</li>
                <li className='li-nav'>Dashboard</li>
                <li className='li-nav'>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;