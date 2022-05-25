import Button from "../button/button.component"
import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-wrapper">
            <div className="cart-dropdown-container">
                <div className="cart-items"></div>
                <Button>Check out</Button>
            </div>
        </div>
    )
}
export default CartDropdown;