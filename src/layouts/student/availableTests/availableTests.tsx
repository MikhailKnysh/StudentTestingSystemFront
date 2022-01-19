import React from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Tab, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {AvailableTest, Subject, SubjectTheme} from "../../teacher/config";
import {availableTestsInit} from "./availableTestsInit";
import {AvailableTestItem} from "./components/availableTestItem";
import {testsApi} from "../../../APIs/testsService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {Loader} from "../../../components/Loader/Loader";

type Props = {
    subjects: Subject[],
    handleAvailableTest: React.Dispatch<React.SetStateAction<AvailableTest>>
}

export const AvailableTests = (props: Props) => {
    const {subjects, handleAvailableTest} = props;
    const {user} = UseUserStateContext();
    const {enqueueSnackbar} = useSnackbar();
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('All');
    const [availableTests, setAvailableTests] = React.useState<AvailableTest[]>(availableTestsInit);
    const [filter, setFilter] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect( () => {
        setIsLoading(prev => !prev);
        testsApi(user.token).getAvailableTestsForStudent(user.id)
            .then(response => setAvailableTests(response.data))
            .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
            .finally(() => setIsLoading(prev => !prev))
    }, [])

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Available tests" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <InputLabel id="select-subject">Subject</InputLabel>
                        <Select
                            labelId="select-subject"
                            id="select-subject"
                            label="Subject"
                            value={currentSubjectId}
                            onChange={(event: SelectChangeEvent) => (setCurrentSubjectId(event.target.value))}
                        >
                            <MenuItem key='all' value='All'>All</MenuItem>
                            {subjects.map((subject) =>
                                <MenuItem key={subject.id} value={subject.id}>{subject.title}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
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
                <Grid item xs={12}>
                    <List>
                        {availableTests
                            .filter(test => test.theme.title.toLowerCase().includes(filter.toLowerCase()))
                            .filter(test => (currentSubjectId === 'All' || test.theme.subjectId === currentSubjectId))
                            .map(test =>
                            <AvailableTestItem test={test} handleAvailableTest={handleAvailableTest}/>
                        )}
                    </List>
                </Grid>
                <Loader show={isLoading} />
            </Grid>
        </Paper>
    );
};