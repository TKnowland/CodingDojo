import { useState } from "react";
import Display from "./display";



const Form = (props) => {
    const [color, setColor] = useState("");

    const createNewBox = (e) => {
        e.preventDefault();
        const newBox = {
            color: color
        }
        props.addBox(newBox);
        setColor("")
    }

    return (
        <>
            <form onSubmit={createNewBox}>
                <input onChange={(e) => setColor(e.target.value)} value={color}/>
                <button>click</button>
            </form>
            <Display boxes = {props.boxes}/>
        </>
    )
}

export default Form