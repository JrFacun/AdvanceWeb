import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, password);

    }
    return (
        <div className="container">
            <br></br>
            <h1>Login</h1>
            <hr></hr>
            <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
                <label>Email</label>
                <input type="text" className="form-control" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br />
                <label>Password</label>
                <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br />
                <div className="btn-box">
                    <span>No account yet register here <Link to="/signup" className="link">Here</Link> </span>
                    <button type="submit" className="btn btn-success btn-md">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;