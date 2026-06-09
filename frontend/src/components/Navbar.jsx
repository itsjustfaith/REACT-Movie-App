import { Link } from "react-router";
import './Navbar.css'


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"> Movie4U</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="navbar-links">
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>

        </nav>
    )
}
