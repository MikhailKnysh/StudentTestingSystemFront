import React from "react";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {UserRole} from "./teacher/config";

export const SignIn = (props:any) => {
    const {handleUserRole} = props;
    

    return (
        <div>
            <Typography variant="h1">Sign in form</Typography>
            <br />
            <Link to="/student">
                <Button variant="contained" onClick={()=>handleUserRole(UserRole.student.toString())}>Sign in as Student</Button>
            </Link>
            <br />
            <br />
            <Link to="/teacher">
                <Button variant="contained" onClick={()=>handleUserRole(UserRole.teacher.toString())}>Sign in as Teacher</Button>
            </Link>
        </div>
    )
}