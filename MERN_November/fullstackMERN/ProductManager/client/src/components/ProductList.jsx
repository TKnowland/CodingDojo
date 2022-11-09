import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default (props) => {
    const { removeFromDom } = props;


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => removeFromDom(productId))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {props.products.map( (product, i) =>
                <div>
                    <Link key={i} to={`/products/${product._id}`}><p>{product.title}</p></Link>
                    <button onClick={e => deleteProduct(product._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}