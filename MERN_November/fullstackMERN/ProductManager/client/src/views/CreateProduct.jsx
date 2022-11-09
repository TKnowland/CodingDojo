import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <ProductForm/>
            <hr />
            <fieldset>
                <legend>Products</legend>
                {loaded && <ProductList products = {products}/>}
            </fieldset>
        </div>
    )
}