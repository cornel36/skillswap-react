import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; 

function AuthPage() {
    const [isSignup, setIsSignup] = useState(true); 
    const navigate = useNavigate();


    const handleFormSubmit = (e) => {
        e.preventDefault();
   
        console.log("Form submitted"); 
        navigate('/'); 
    };

    return (
        <div className="auth-container">
            <button onClick={() => setIsSignup(false)}>Login</button>
            <button onClick={() => setIsSignup(true)}>Signup</button>
            
            {isSignup && (
                <form onSubmit={handleFormSubmit} className="signup-form">
                    <h2>Create a new account</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Retype Password" required />
                    <div className="separator"></div>
                    <button type="submit">Sign up!</button>
                </form>
            )}
        </div>
    );
}

export default AuthPage;
