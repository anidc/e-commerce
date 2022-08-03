import { Link } from "react-router-dom";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss"

const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Link className="directory-item-container" to={`/shop/${category.title.toLowerCase()}`} key={category.id}>
                    <DirectoryItem key={category.id} category={category} />
                </Link>
            ))}
        </div >
    )
}
export default Directory;