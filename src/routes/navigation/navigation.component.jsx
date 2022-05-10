import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={require("../../assets/maxe.jpg")} alt="" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="shop">Shop</Link>
                    <Link className="nav-link" to="sign-in">Sign In</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Navigation;