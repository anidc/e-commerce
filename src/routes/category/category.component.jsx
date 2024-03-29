import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss"

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProdcuts] = useState(categoriesMap[category])

    useEffect(() => {
        setProdcuts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className="category-container-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}
export default Category;