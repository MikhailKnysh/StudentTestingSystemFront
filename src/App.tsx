import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {AuthProvider} from "./Auth/AuthProvider";
import { SnackbarProvider } from 'notistack';


function App() {

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
