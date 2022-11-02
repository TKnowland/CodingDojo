import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Api.module.css'

const Api = () => {
    const [swData, setSwData] = useState(null);
    const {filter, id} = useParams()

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${filter}/${id}`)
            .then(response => {
                setSwData(response)
                console.log(swData)
            })
            .catch(err => console.log(err))
    }, [filter, id])

    return (
        <div className={styles.container}>
            {swData?
                filter == "people"?
                    <div>
                        <h1>{swData.data.name}</h1>
                        <br />
                        <p><strong>Height:</strong> {swData.data.height}cm</p>
                        <p><strong>Mass:</strong> {swData.data.mass}kg</p>
                        <p><strong>Hair Color:</strong> {swData.data.hair_color}</p>
                        <p><strong>Skin Color:</strong> {swData.data.skin_color}</p>
                    </div>
                    :<div>
                        <h1>{swData.data.name}</h1>
                        <br />
                        <p><strong>Climate:</strong> {swData.data.climate}</p>
                        <p><strong>Terrain:</strong> {swData.data.terrain}</p>
                        <p><strong>Surface Water:</strong> {swData.data.surface_water}</p>
                        <p><strong>Population:</strong> {swData.data.population}</p>
                    </div>
                :<div>
                    <h1><strong>Bleep Bloop....</strong></h1>
                </div>
            }
        </div>
    )
}

export default Api