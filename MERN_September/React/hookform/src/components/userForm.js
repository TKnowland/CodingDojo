import React, {useState} from 'react'


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>   
    );

}

export default UserForm