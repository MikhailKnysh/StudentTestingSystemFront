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

    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || JSON.stringify(userInitialState)));
        console.log(user);
    }, [])

    React.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    const handleUser = async (email:string, password:string) =>
    {
        await sessionApi().login(email, password)
            .then(response => setUser(response.data))
            .catch(error => enqueueSnackbar(error.message, {variant: 'error'}));
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