import styles from './display.module.css';


const Display = (props) => {

    return(
        <>
            <div className={styles.container}>
                {props.boxes.map( (box, index) => {
                    const boxStyle = {
                        width: box.size + "px",
                        height: box.size + "px",
                        background: box.color
                    }
                    return <div key={index}>
                        <p style={boxStyle}></p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Display;