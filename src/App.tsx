import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {UserRole} from "./layouts/teacher/config";

function App() {
    const role = localStorage.getItem("userRole");
    const [userRole, setUserRole] = React.useState<string>(role || UserRole.guest.toString());
    React.useEffect(() => {
        localStorage.setItem("userRole", userRole);
    }, [userRole])

  return (
    <div className="App">
      <RootRouter handleUserRole={setUserRole}/>
    </div>
  );
}

export default App;
