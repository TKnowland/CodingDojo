import React, {useState} from "react";
import styles from './UserForm.module.css'

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");


    // const createUser = e => {
    //     e.preventDefault();
    //     const newUser = {firstName, lastName, email, password};
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPass("");
    // }

    return (
        <div className = {styles.container}>
            <form>
                <div className = {styles.formItem}>
                    <label>First Name: </label>
                    <input type="text" onChange = {e => setFirstName(e.target.value)}/>
                </div>
                <div className = {styles.formItem}>
                    <label>Last Name: </label>
                    <input type="text" onChange = {e => setLastName(e.target.value)}/>
                </div>
                <div className = {styles.formItem}>
                    <label>Email: </label>
                    <input type="text" onChange = {e => setEmail(e.target.value)}/>
                </div>
                <div className = {styles.formItem}>
                    <label>Password: </label>
                    <input type="text" onChange = {e => setPassword(e.target.value)}/> 
                </div>
                <div className = {styles.formItem}>
                    <label>Confirm Password: </label>
                    <input type="text" onChange = {e => setConfirmPass(e.target.value)}/>
                </div>
            </form>

            <div className = {styles.update}>
                <div className = {styles.attributes}>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Email</p>
                    <p>Password</p>
                    <p>Confirm Password</p>
                </div>
                <div className = {styles.values}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{confirmPass}</p>
                </div>
            </div>
        </div>
    )
}

export default UserForm