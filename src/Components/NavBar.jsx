import { Link } from "react-router-dom";
import '../App.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <Link className="navTab" to={"/"}>Feed</Link>
                <Link className="navTab" to="/profile">Profile</Link>
            </div>
        </nav>
    );
}
export default NavBar;