import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "./Config/Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {
            setSuccessMsg('Login Succesfully! You will now be redirected to HomePage');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/');
            }, 3000);
        }).catch(error => setErrorMsg(error.message));

    }
    return (
        <>
            {/* Section: Design Block */}
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1
                                className="my-5 display-5 fw-bold ls-tight"
                                style={{ color: "hsl(218, 81%, 95%)" }}
                            >
                                Advance <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                    Web Development
                                </span>
                            </h1>
                            <p
                                className="mb-4 opacity-70"
                                style={{ color: "hsl(218, 81%, 85%)" }}
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div
                                id="radius-shape-1"
                                className="position-absolute rounded-circle shadow-5-strong"
                            />
                            <div
                                id="radius-shape-2"
                                className="position-absolute shadow-5-strong"
                            />
                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <br></br>
                                    <h1>Login</h1>
                                    <hr></hr>
                                    {successMsg && (
                                        <>
                                            <div className="success-msg">{successMsg}</div>
                                            <br></br>
                                        </>
                                    )}

                                    <form
                                        className="form-group"
                                        autoComplete="off"
                                        onSubmit={handleSignup}
                                    >
                                        {/* Email input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="form-control"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="form-control"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                            />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-primary btn-block mb-4 "
                                        >
                                            Login
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <span>
                                                No account yet register here{" "}
                                                <Link to="/signup" className="link">
                                                    Here
                                                </Link>
                                            </span>
                                        </div>
                                    </form>
                                    {errorMsg && <>
                                        <br></br>
                                        <div className="error-msg">{errorMsg}</div>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </>
    )
}

export default Login;