import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "./Config/Firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const ref = doc(fs, "tblUsers", userCredential.user.uid);
                const docRef = await setDoc(ref, {
                    FullName: fullName,
                    Address: address,
                    Email: email,
                    Password: password,
                })
                    .then(() => {
                        setSuccessMsg(
                            "Signup Successful. You will now redirected to Login"
                        );
                        setFullName("");
                        setAddress("");
                        setEmail("");
                        setPassword("");
                        setErrorMsg("");
                        setTimeout(() => {
                            setSuccessMsg("");
                            navigate("/");
                        }, 3000);
                    })
                    .catch((error) => setErrorMsg(error.message));
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    };

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
                                    <h1>Sign-Up</h1>
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
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            {/* Name input */}
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example3"
                                                    className="form-control"
                                                    required
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    value={fullName}
                                                />
                                                <label className="form-label" htmlFor="form3Example3">
                                                    Full Name
                                                </label>
                                            </div>
                                        </div>
                                        {/* Address textarea */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <textarea
                                                id="form3Example3"
                                                className="form-control"
                                                rows="4" // Adjust the number of rows as needed
                                                required
                                                onChange={(e) => setAddress(e.target.value)}
                                                value={address}
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Address
                                            </label>
                                        </div>

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
                                            Sign up
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <span>
                                                Already has an account login{" "}
                                                <Link to="/" className="link">
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
    );
};

export default Signup;
