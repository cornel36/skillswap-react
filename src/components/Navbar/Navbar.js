import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo_fullskala.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogoClick = () => {
        setIsOpen(false); 
        navigate('/'); 
    };

    const handleAuthClick = () => { 
        navigate('/AuthPage'); 
    };

    return (
        <nav className="navbar">
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`menu-content ${isOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={toggleMenu}>×</div>
                <div className="logo" onClick={handleLogoClick}>
                    <img src={logo} alt="Logo" style={{ height: '75px' }} /> 
                </div>
                <Link to="/profile">Profile</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/about">About</Link>
            </div>
            <button className="cloud-button auth" onClick={handleAuthClick}>Sign-up/Login</button>
        </nav>
    );
}

export default Navbar;
