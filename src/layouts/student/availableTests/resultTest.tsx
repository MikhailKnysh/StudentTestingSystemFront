import React from 'react';
import {Button, Divider, Grid, Link, Paper, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {StudentsTest} from "../../teacher/config";
import {TestItem} from "../../../components/TestItem/TestItem";
import {UseUserStateContext} from "../../../Auth/AuthProvider";

type Props = {
    test: StudentsTest
}

export const ResultTest = (props: Props) => {
    const { test } = props;
    const {user} = UseUserStateContext();
    React.useEffect(() => {
        let tmp = `${user.firstName} ${user.lastName}`;
        test.title = tmp;
    }, [])

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Congratulations! You have completed the test!
                    </Typography>
                    <Typography variant="subtitle1">You can complete more tests or check completed tests.</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <TestItem test={test} />
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={4} >
                    <Link to="/student/completed" key="availableTests" component={NavLink} sx={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" >
                            See completed tests
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={3} >
                    <Link to="/student/available" key="completedTests" component={NavLink} sx={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Pass one more
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    );
};