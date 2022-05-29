import "./cart-item.styles.scss"

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="cart-item-details">
                <h3>{name}</h3>
                <span>Price: ${price * quantity}</span>
                <br />
                <span>Quantity: {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;