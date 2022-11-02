import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavForm.module.css'

const NavForm = (props) => {
    const [filter, setFilter] = useState("people");
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const filterHandler = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    const idHandler = (e) => {
        e.preventDefault();
        setId(e.target.value)
    }

    const sendSurvey = (e) => {
        e.preventDefault();
        navigate(`/api/${filter}/${id}`)
    }

    return (
        <div>
            <form onSubmit={e => sendSurvey(e)}>
                Search for: 
                <select className={styles.field} onChange={e => {filterHandler(e)}}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                ID:
                <input className={styles.field} type="number" onChange={e => idHandler(e)}/>
                <button className={styles.search}>Search</button>
            </form>
        </div>
    )
}

export default NavForm;