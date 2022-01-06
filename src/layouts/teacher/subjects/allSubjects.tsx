import React from 'react';
import {
    Grid, Paper, Tab, TextField,
} from "@mui/material";
import List from "@mui/material/List";
import {Subject} from "../config";
import {SubjectItem} from "./components/subjectItem";
import AddSubject from "./addSubject";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {subjectApi} from "../../../APIs/subjectService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import { useSnackbar } from 'notistack';

type Props = {
    subjects: Subject[],
    handleSubjects: React.Dispatch<React.SetStateAction<Subject[]>>
}

export const AllSubjects = (props: Props) => {

    const [filter, setFilter] = React.useState<string>('');
    const [subjects, setSubjects] = React.useState<Subject[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    const { user } = UseUserStateContext();

    const handleGetAll = React.useCallback(() =>
    {
        subjectApi(user.token)
            .getAll()
            .then(response => setSubjects(() => response.data))
            .catch(error => enqueueSnackbar(error,{variant: 'error'}));
    },[])

    React.useEffect(handleGetAll,[])

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Subjects" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <AddSubject handleGetAll={ handleGetAll } />
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
                        {subjects
                            .filter((subject) => subject.title.toLowerCase().includes(filter.toLowerCase()))
                            .map((subject) =>
                                <SubjectItem key={subject.title} subject={subject} handleGetAll={handleGetAll}/>
                        )}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

