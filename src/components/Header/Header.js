import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/home">HOME</a>
                <a href="/reviews">REVIEWS</a>
                <a href="/dashboard">DASHBOARD</a>
                <a href="/blogs">BLOGS</a>
                <a href="/about">ABOUT</a>
            </div>
        </nav>
    );
};

export default Header;