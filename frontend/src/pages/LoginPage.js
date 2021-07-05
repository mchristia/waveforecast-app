import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components/macro";

const initialState ={
    username: "",
    password: "",
}

export default function LoginPage(){

    const [credentials, setCredentials] = useState(initialState)
    const {login} = useContext(AuthContext)

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name] : event.target.value})
    }

    const handleSubmit = event =>{
        event.preventDefault()
        login(credentials)
    }

    return(
        <Wrapper>
            <div>
                <h1>Aloha</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <div>
                        <label>Username</label>
                    </div>
                    <div>
                        <input placeholder={"enter username"} type="text" name="username" onChange={handleChange} value={credentials.username}/>
                    </div>
                </div>
                <div className="password">
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input placeholder={"Enter password"} type="password" name="password" onChange={handleChange} value={credentials.password}/>
                    </div>
                 </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("/images/Aloha-App.gif");
  height: 100%;
  background-size: cover;
  background-position: -367px;
  
  h1{
    font-family: "Bradley Hand";
    margin-top: 4rem;
  }
  
  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  
  .username{
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
  }
  label{
    padding: 1rem;
  }
  
  .password{
    display: flex;
    padding: 0.5rem;
  }
  button{
    width: 12rem;
    height: 2rem;
    border-radius: 50%;
  }
  
`