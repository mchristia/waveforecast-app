import {useState} from "react";

const initialState ={
    username: "",
    password: "",
}

export default function LoginPage({login}){

    const [credentials, setCredentials] = useState(initialState)

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name] : event.target.value})
    }

    const handleSubmit = event =>{
        event.preventDefault()
        login(credentials)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input placeholder={"enter username"} type="text" name="username" onChange={handleChange} value={credentials.username}/>
            </label>
            <label>
                Password
                <input placeholder={"Enter password"} type="password" name="password" onChange={handleChange} value={credentials.password}/>
            </label>
            <button>Login</button>
        </form>
    )
}