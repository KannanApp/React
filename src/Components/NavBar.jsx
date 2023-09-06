import { Link } from "react-router-dom";
import '../App.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <Link className="navTab" to={"/"}>Feed</Link>
                <Link className="navTab" to="/profile">Profile</Link>
                <Link className="navTab" to={"/reducer"}>Reducer</Link>
                <Link className="navTab" to={"/rnquery"}>RNQuery</Link>
                <Link className="navTab" to={"/Formik"}>Formik</Link>
                <Link className="navTab" to={"/RNPagination"}>RNPagination</Link>
                <Link className="navTab" to={"/search"}>Search</Link>
            </div>
        </nav>
    );
}
export default NavBar;