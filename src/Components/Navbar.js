import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <Link to="signup">Signup - Up</Link>
            <Link to="login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contact</Link>
        </div>
    )
}
export default Navbar;