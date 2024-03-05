import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
    const [isSignup, setIsSignup] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (password !== retypePassword) {
                alert("Passwords do not match!");
                return;
            }

            console.log("Signup successful with", email, username, password);
            navigate('/profile')
        } else {
            console.log("Login attempt with", username, password);
            navigate('/profile')
        }
    };

    return (
        <div className="auth-container">
            {isSignup ? (
                <form onSubmit={handleFormSubmit} className="signup-form">
                    <h2>Sign up</h2>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <input type="password" placeholder="Retype Password" value={retypePassword} onChange={e => setRetypePassword(e.target.value)} required />
                    <button type="submit">Sign up!</button>
                </form>
            ) : (
                <form onSubmit={handleFormSubmit} className="login-form">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            )}
            <div className="auth-actions">
                <div className="separator">or</div>
                <button onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Login" : "Signup"}</button>
            </div>
        </div>
    );
}

export default AuthPage;
