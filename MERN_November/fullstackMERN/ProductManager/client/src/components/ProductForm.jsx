import { useState } from "react";
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" onChange={e => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label>
                    <textarea onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </p>
                <button>create</button>
            </form>
        </>
    )
}