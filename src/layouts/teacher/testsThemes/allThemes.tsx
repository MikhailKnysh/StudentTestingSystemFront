import React from 'react';
import {Subject, SubjectTheme} from "../config";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Tab, TextField} from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {TestsThemesItem} from "./components/testsThemesItem";
import Divider from "@mui/material/Divider";
import { AddTheme } from './addTheme';
import {UseSubjectsContext} from "../Providers/SubjectsProvider";
import {UseThemesContext} from "../Providers/ThemesProvider";



export const AllThemes = () => {
    const {themes, handleThemes} = UseThemesContext();
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('');
    const [filter, setFilter] = React.useState<string>('');
    const {subjects} = UseSubjectsContext();

    const handleCurrentSubjectId = (event: SelectChangeEvent) => {
        setCurrentSubjectId(event.target.value);
        handleThemes(event.target.value);
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Themes" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <AddTheme currentSubjectId={currentSubjectId}/>
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
                            onChange={handleCurrentSubjectId}
                            >
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
                        {themes
                            .filter(theme => (theme.title.toLowerCase().includes(filter.toLowerCase())))
                            .map((theme) =>
                                <TestsThemesItem key={theme.id} theme={theme} subjects={subjects} />
                        )}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};