import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Signup = () => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    // const [errorMsg, setErrorMsg]=useState('');
    // const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
        console.log(fullName, email, password);
    }

    return (
        <div className="container">
            <br></br>
            <h1>Sign-Up</h1>
            <hr></hr>
            <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" className="form-control" required
                onChange={(e)=>setFullName(e.target.value)} value={fullName}></input>
                <br />
                <label>Email</label>
                <input type="email" className="form-control" required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br />
                <label>Password</label>
                <input type="password" className="form-control" required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br />
                <div className="btn-box">
                    <span>Already has an account login <Link to="/login" className="link">Here</Link></span>
                    <button type="submit" className="btn btn-success btn-md">Sign-up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;