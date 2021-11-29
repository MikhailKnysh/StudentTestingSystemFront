import React from 'react';
import './App.css';
import {RootRouter} from "./routes/RootRouter";
import {User, UserRole} from "./layouts/teacher/config";

export const userInitialState: User = {
    idUser: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: UserRole.guest,
    token: "",
    expires: 0
}

function App() {
    const currentUser = JSON.parse(localStorage.getItem("user") || JSON.stringify(userInitialState));
    const [user, setUser] = React.useState<User>(currentUser);
    React.useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])

  return (
    <div className="App">
      <RootRouter user={user} handleUser={setUser}/>
    </div>
  );
}

export default App;
