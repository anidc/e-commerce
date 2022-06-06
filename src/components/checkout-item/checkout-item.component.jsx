import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import "./checkout-item.styles.scss"

const CheckoutItem = ({ cartItem }) => {
    const { id, name, imageUrl, quantity, price } = cartItem;
    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)

    const removeItemToCartHandler = () => removeItemToCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const clearItemFromCartHandler = () => clearItemFromCart(cartItem)

    return (
        <tr key={id} className="product-tr">
            <td><img src={imageUrl} alt={name} /></td>
            <td>{name}</td>
            <td>
                <i onClick={removeItemToCartHandler} className="bi bi-chevron-left"></i>
                &nbsp;
                {quantity}
                &nbsp;
                <i onClick={addItemToCartHandler} className="bi bi-chevron-right"></i>
            </td>
            <td>{price * quantity}$</td>
            <td><i onClick={clearItemFromCartHandler} className="bi bi-x-lg"></i></td>
        </tr>
    )
}

export default CheckoutItem;