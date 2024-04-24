import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "./Config/Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            setSuccessMsg('Login Succesfully! You will now be redirected to HomePage');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/');
            }, 3000);
        }).catch(error=>setErrorMsg(error.message));

    }
    return (
        <div className="container">
            <br></br>
            <h1>Login</h1>
            <hr></hr>
            {successMsg&&<>
                <div className="success-msg">{successMsg}</div>
                <br></br>
            </>}
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
            {errorMsg&& <>
                <br></br>
                <div className="error-msg">{errorMsg}</div>
            </>}
        </div>
    )
}

export default Login;