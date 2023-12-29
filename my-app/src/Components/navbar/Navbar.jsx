import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Travel Pakistan</span>
                <div className="navItems">
                    <Link to="/register" className="headerLink">
                        <button  className="navButton">Register</button>
                    </Link>
                    <Link to="/login" className="headerLink">
                        <button link="/login" className="navButton">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;