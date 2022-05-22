import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={require("../../assets/maxe.jpg")} alt="" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="shop">Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>Log Out</span>
                        ) : (
                            <Link className="nav-link" to="auth">Sign In</Link>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Navigation;