import { useContext } from "react";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavLink, NavLinks, NavigationContainer, LogoContainer } from "./navigation.styles"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)
    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img src={require("../../assets/maxe.jpg")} alt="" />
                </LogoContainer>
                <NavLinks>
                    <NavLinks>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="shop">Shop</NavLink>
                        {
                            currentUser ? (
                                <NavLink as="span" onClick={signOutUser}>Log Out</NavLink>
                            ) : (
                                <NavLink to="auth">Sign In</NavLink>
                            )
                        }
                        <CartIcon className="nav-link" />
                    </NavLinks>
                    {isCartOpen && <CartDropdown />}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </>
    );
}
export default Navigation;