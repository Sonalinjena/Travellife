// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Appticode Logo" />
            </div>
            <div className="user-info">
                <span>John Doe</span>
                <img src="profile-icon.png" alt="User Profile" className="profile-icon" />
            </div>
        </header>
    );
}

export default Header;
