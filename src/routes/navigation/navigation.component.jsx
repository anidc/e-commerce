import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)
    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={require("../../assets/maxe.jpg")} alt="" />
                </Link>
                <div className="nav-links-container">
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
                        <CartIcon className="nav-link" />
                    </div>
                    {isCartOpen && <CartDropdown />}
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Navigation;