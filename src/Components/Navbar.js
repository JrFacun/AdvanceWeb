import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return(
        <div>
            <Link to="signup">Signup - Up</Link>
            <Link to="login">Login</Link>
        </div>
    )
}
export default Navbar;