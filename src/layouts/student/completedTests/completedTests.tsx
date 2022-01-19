import React from 'react';
import {Button, Grid, Link, MenuItem, Paper, Tab, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import {StudentsTest, Subject, SubjectTheme} from "../../teacher/config";
import {TestItem} from "../../../components/TestItem/TestItem";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {testsApi} from "../../../APIs/testsService";
import {Loader} from "../../../components/Loader/Loader";


export const CompletedTests = () => {

    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [studentTests, setStudentTests] = React.useState<StudentsTest[]>([]);
    const [filter, setFilter] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(prev => !prev);
        testsApi(user.token).getAllForStudent(user.id)
            .then(response => {
                response.data && setStudentTests(response.data);
            })
            .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
            .finally(() => setIsLoading(prev => !prev))
    }, [])

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Completed Tests" />
                        </Tabs>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        key="filter"
                        label="Search..."
                        fullWidth
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                    />
                </Grid>
                {studentTests
                    .filter(test => test.title.toLowerCase().includes(filter.toLowerCase()))
                    .map((test) =>
                        <Grid item xs={12}>
                            <TestItem test={test} />
                        </Grid>
                )}
            </Grid>
            <Loader show={isLoading} />
        </Paper>
    );
};