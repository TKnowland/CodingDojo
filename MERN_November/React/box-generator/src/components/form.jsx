import { useState } from "react";
import Display from "./display";



const Form = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);

    const createNewBox = (e) => {
        e.preventDefault();
        const newBox = {
            size: size,
            color: color
        }
        props.addBox(newBox);
        setColor("")
    }

    return (
        <>
            <form onSubmit={createNewBox}>
                <label>Color</label>
                <input onChange={(e) => setColor(e.target.value)} value={color}/>
                <br />
                <label>Size(px)</label>
                <input type="number" onChange={(e) => setSize(e.target.value)} value={size}/>
                <br />
                <button>click</button>
            </form>
            <Display boxes = {props.boxes}/>
        </>
    )
}

export default Form