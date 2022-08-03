import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { CartDropdownContainer, CartDropdownWrapper, CartItems, EmptyMessage } from "./cart-dropdown.styles"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate("/checkout")
    }
    return (
        <CartDropdownWrapper>
            <CartDropdownContainer>
                <CartItems>
                    {
                        cartItems.length ? (
                            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                        ) : (<EmptyMessage>No products in cart!</EmptyMessage>)
                    }
                </CartItems>
                <Button onClick={goToCheckoutHandler}>Check out</Button>

            </CartDropdownContainer>
        </CartDropdownWrapper>
    )
}
export default CartDropdown;