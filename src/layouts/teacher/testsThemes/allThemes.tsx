import React from 'react';
import {Subject, SubjectTheme} from "../config";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, Tab, Typography} from "@mui/material";
import List from "@mui/material/List";
import {SubjectItem} from "../subjects/components/subjectItem";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {subjectsMock} from "../subjects/allSubjects";

const themesMock: SubjectTheme[] = [
    {id: "1", subjectId: '5', title: 'React'},
    {id: "2", subjectId: '5', title: 'React Native'},
    {id: "3", subjectId: '5', title: 'React Router Dom'},
    {id: "4", subjectId: '5', title: 'Mob x'},
    {id: "5", subjectId: '5', title: 'Redux'}
]

const AllThemes = () => {
    const [themes, setThemes] = React.useState<SubjectTheme[]>(themesMock);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThemes(
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
                        {subjectsMock.map((subject) =>
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