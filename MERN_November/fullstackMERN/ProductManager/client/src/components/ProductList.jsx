import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <Link key={i} to={`/products/${product._id}`}><p>{product.title}</p></Link>
            )}
        </div>
    )
}