import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {User, userInitialState} from "./layouts/teacher/config";
import axios from 'axios';
import {AuthProvider} from "./Auth/AuthProvider";

const loginCall = async (email:string, password: string) =>
{
    const login = {email, password};
    const headers = {
        'Content-Type': 'application/json'
    }
    const user: User = await axios
        .post("https://stsapplication.azurewebsites.net/Session/session/create", login, {headers: headers})
        .then(response => response.data)
        .catch((error : Error) => console.log("Error: ",error.message));

    return user;
}

function App() {
    const currentUser = JSON.parse(localStorage.getItem("user") || JSON.stringify(userInitialState));

  return (
    <div className="App">
        <AuthProvider loginCall={loginCall}>
            <RootRouter />
        </AuthProvider>
    </div>
  );
}

export default App;
