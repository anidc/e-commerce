import "./product-card.styles.scss"
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProdToCart = () => addItemToCart(product)

    return (
        <div className="product-card">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProdToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;