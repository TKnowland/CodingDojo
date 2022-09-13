import React, {useState} from 'react'


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("")

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value)
        if(e.target.value.length < 1) {
            setUsernameError("Username is required!")
        } else if(e.target.value.length < 2) {
            setUsernameError("Username must be 2 characters or longer!")
        } else {
            setUsernameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!")
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!")
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 1) {
            setConfirmPasswordError("ConfirmPassword is required!")
        } else if(e.target.value != password) {
            setConfirmPasswordError("Passwords do not match!")
        } else {
            setConfirmPasswordError("")
        }
    }
    
    return(
        <div>
            
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ handleUsername } />
                    {
                        usernameError ?
                        <p style={{color:'red'}}>{usernameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p>:
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>   
    );

}

export default UserForm