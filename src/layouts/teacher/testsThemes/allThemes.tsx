import React from 'react';
import {Subject, SubjectTheme} from "../config";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, Tab, Typography} from "@mui/material";
import List from "@mui/material/List";
import {SubjectItem} from "../subjects/components/subjectItem";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleThemes: React.Dispatch<React.SetStateAction<SubjectTheme[]>>
}

const AllThemes = (props: Props) => {
    const {subjects, themes, handleThemes} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleThemes(
            themes.map(theme => theme.id === event.target.id ? {...theme, title: event.target.value} : theme)
        )
    }
    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs value={0}>
                            <Tab label="Themes" />
                        </Tabs>
                    </Box>
                    <FormControl fullWidth>
                        <InputLabel id="select-subject">Subject</InputLabel>
                    <Select
                        labelId="select-subject"
                        id="select-subject"
                        label="Subject"
                    >
                        {subjects.map((subject) =>
                            <MenuItem value={10}>{subject.title}</MenuItem>
                        )}
                    </Select>
                    </FormControl>
                    <List>
                        {themes.map((theme) =>
                            <SubjectItem subject={theme} />
                        )}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default AllThemes;