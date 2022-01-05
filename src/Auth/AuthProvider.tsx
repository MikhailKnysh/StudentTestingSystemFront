import React from "react";
import {User, userInitialState, UserRole} from "../layouts/teacher/config";
type Auth = {
    user: User,
    handleAuth: (email:string, password: string) => void
    handleLogout: () => void
}

type Props = {
    loginCall: (email:string, password:string) =>  Promise<User>,
    children?: any
}

const UserStateContext = React.createContext<Auth>({
    user: userInitialState,
    handleLogout:() => {},
    handleAuth: (email:string, password: string) => { console.log("Error!")},
});

export const UseUserStateContext = () =>
{
    return React.useContext(UserStateContext);
}

export const AuthProvider = (props: Props) =>
{
    const {children, loginCall} = props;
    const [user, setUser] = React.useState(userInitialState);

    const handleUser = async (email:string, password:string) =>
    {
        const responseUser = await loginCall(email, password);
        setUser(responseUser);
    }

    const handleLogout = () =>
    {
        setUser(userInitialState);
    }

    return (
        <UserStateContext.Provider value={{user: user, handleAuth: handleUser, handleLogout: handleLogout}}>
            {children}
        </UserStateContext.Provider>
    );
}