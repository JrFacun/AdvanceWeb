import React, {useState} from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "./Config/Firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

export const Signup = () => {

    const navigate = useNavigate();
    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            async(userCredential) =>{
                const ref = doc(fs, "tblUsers", userCredential.user.uid)
                const docRef = await setDoc(ref, {
                    FullName: fullName,
                    Email: email,
                    Password: password
                })
                .then(()=>{
                    setSuccessMsg('Signup Successful. You will now redirected to Login');
                    setFullName('');
                    setEmail('');
                    setPassword('');
                    setErrorMsg('');
                    setTimeout(() =>{
                        setSuccessMsg('');
                        navigate('/login')
                    }, 3000);
                }).catch(error=>setErrorMsg(error.message));
            }).catch((error)=>{
                setErrorMsg(error.message)
            })
    }

    return (
        <div className="container">
            <br></br>
            <h1>Sign-Up</h1>
            <hr></hr>
            {successMsg&&<>
                <div className="success-msg">{successMsg}</div>
                <br></br>
            </>}
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
            {errorMsg&&<>
            <br></br>
            <div className="error-msg">{errorMsg}</div>
            </>}
        </div>
    )
}

export default Signup;