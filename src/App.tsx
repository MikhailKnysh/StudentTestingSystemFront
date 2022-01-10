import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {AuthProvider} from "./Auth/AuthProvider";
import { SnackbarProvider } from 'notistack';
import Box from "@mui/material/Box";


function App() {
  return (
    <Box className="App">
        <SnackbarProvider autoHideDuration={3000}>
            <AuthProvider>
                <RootRouter />
            </AuthProvider>
        </SnackbarProvider>
    </Box>
  );
}

export default App;
