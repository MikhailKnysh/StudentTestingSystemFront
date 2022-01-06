import React from "react";
import {User, userInitialState} from "../layouts/teacher/config";
import {sessionApi} from "../APIs/sessionService";
import {useSnackbar} from "notistack";
type Auth = {
    user: User,
    handleAuth: (email:string, password: string) => void
    handleLogout: () => void
}

type Props = {
    children?: React.ReactNode
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
    const {children} = props;
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = React.useState(userInitialState);

    const handleUser = async (email:string, password:string) =>
    {
        const responseUser = await sessionApi().login(email, password)
            .then(response => response.data)
            .catch(error => enqueueSnackbar(error.message, {variant: 'error'}));
        if (typeof responseUser === 'object')
        {
            setUser(responseUser);
        }
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