import React from 'react';
import {Avatar, Box, Button, Link, Paper, Typography} from "@mui/material";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {AvailableTest} from "../../../teacher/config";
import {NavLink} from "react-router-dom";

type Props = {
    test: AvailableTest,
    handleAvailableTest: React.Dispatch<React.SetStateAction<AvailableTest>>
}

export const AvailableTestItem = (props: Props) => {
    const {test, handleAvailableTest} = props;

    return (
        <Paper elevation={1} sx={{mt: 2, p:2, display: 'flex', textAlign: 'left', alignItems:'center'}}>
            <Avatar sx={{bgcolor: "#E08F1A"}}><FlashOnIcon /></Avatar>
            <Typography sx={{mx:2}} variant='h6'>{test.theme.title}</Typography>
            <Box sx={{flexGrow:1}}/>
            <Link to='/student/available/testing' component={NavLink} sx={{textDecoration: 'none'}}>
                <Button onClick={() => handleAvailableTest(test)}>Start</Button>
            </Link>
        </Paper>
    );
};