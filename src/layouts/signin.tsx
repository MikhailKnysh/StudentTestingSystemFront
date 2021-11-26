import React from "react";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {User, UserRole} from "./teacher/config";

type Props = {
    handleUser: React.Dispatch<React.SetStateAction<User>>
}

export const SignIn = (props:Props) => {
    const {handleUser} = props;
    const handleUserLogin = (newUserRole: UserRole) => {
        handleUser(prev => ({...prev, userRole: newUserRole}))
    }

    return (
        <div>
            <Typography variant="h1">Sign in form</Typography>
            <br />
            <Link to="/student">
                <Button variant="contained" onClick={() => handleUserLogin(UserRole.student)}>Sign in as Student</Button>
            </Link>
            <br />
            <br />
            <Link to="/teacher">
                <Button variant="contained" onClick={() => handleUserLogin(UserRole.teacher)}>Sign in as Teacher</Button>
            </Link>
        </div>
    )
}