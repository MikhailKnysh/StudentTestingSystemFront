import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {userInitialState} from "./layouts/teacher/config";
import {AuthProvider} from "./Auth/AuthProvider";
import { SnackbarProvider } from 'notistack';


function App() {
    const currentUser = JSON.parse(localStorage.getItem("user") || JSON.stringify(userInitialState));

  return (
    <div className="App">
        <SnackbarProvider autoHideDuration={3000}>
            <AuthProvider>
                <RootRouter />
            </AuthProvider>
        </SnackbarProvider>
    </div>
  );
}

export default App;
