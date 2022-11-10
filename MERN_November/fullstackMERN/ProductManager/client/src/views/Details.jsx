import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
export default (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => props.removeFromDom(productId))
            .catch(err => console.error(err))
        navigate('/products')
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/update/${product._id}`}>Update</Link>
            <button onClick={e => deleteProduct(product._id)}>Delete</button>
            <Link to={'/products'}>Home</Link>
        </div>
    )
}
