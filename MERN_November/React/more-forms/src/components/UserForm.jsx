import React, {useState} from "react";
import styles from './UserForm.module.css'

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");


    const handleFirstName = e => {
        setFirstName(e.target.value);
        if(e.target.value.length === 0) {
            setFirstNameError("First name is required")
        }else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters")
        }else {
            setFirstNameError("")
        }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if(e.target.value.length === 0) {
            setLastNameError("Last name is required")
        }else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters")
        }else {
            setLastNameError("")
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length === 0) {
            setEmailError("Email is required")
        }else if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters")
        }else {
            setEmailError("")
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length === 0) {
            setPasswordError("Password is required")
        }else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        }else {
            setPasswordError("")
        }
    }

    const handleConfirmPass = e => {
        setConfirmPass(e.target.value);
        if(e.target.value.lenth < 1){
            setConfirmPassError("Confrim Password is required")
        }else if(e.target.value != password){
            setConfirmPassError("Passwords must match")
        }else{
            setConfirmPassError("")
        }
    }



    return (
        <div className = {styles.container}>
            <form onSubmit={e => e.preventDefault()}>
                <div className = {styles.formItem}>
                    <label>First Name: </label>
                    <input type="text" onChange = {e => handleFirstName(e)}/>
                </div>
                {
                    firstNameError ? <p className = {styles.error}>{firstNameError}</p> : ''
                }

                <div className = {styles.formItem}>
                    <label>Last Name: </label>
                    <input type="text" onChange = {e => handleLastName(e)}/>
                </div>
                {
                    lastNameError ? <p className = {styles.error}>{lastNameError}</p> : ''
                }

                <div className = {styles.formItem}>
                    <label>Email: </label>
                    <input type="text" onChange = {e => handleEmail(e)}/>
                </div>
                {
                    emailError ? <p className = {styles.error}>{emailError}</p> : ''
                }

                <div className = {styles.formItem}>
                    <label>Password: </label>
                    <input type="text" onChange = {e => handlePassword(e)}/> 
                </div>
                {
                    passwordError ? <p className = {styles.error}>{passwordError}</p> : ''
                }

                {
                    confirmPassError ? <p className = {styles.error}>{confirmPassError}</p> : ''
                }
                <div className = {styles.formItem}>
                    <label>Confirm Password: </label>
                    <input type="text" onChange = {e => handleConfirmPass(e)}/>
                </div>

            </form>
        </div>
    )
}

export default UserForm