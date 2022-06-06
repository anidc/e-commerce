import { useContext } from "react"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../contexts/cart.context"
import "./checkout.styles.scss"

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className="checkout-wrapper">
            <table className="checkout-table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} />)
                    }
                </tbody>
            </table>
            <div className="total-div">
                <p>Total: ${cartTotal}</p>
            </div>
        </div>
    )
}

export default Checkout;