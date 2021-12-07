import React from 'react';
import {Subject, SubjectTheme} from "../config";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Tab} from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {TestsThemesItem} from "./components/testsThemesItem";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleThemes: React.Dispatch<React.SetStateAction<SubjectTheme[]>>
}

const AllThemes = (props: Props) => {
    const {subjects, themes, handleThemes} = props;
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('0');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleThemes(
            themes.map(theme => theme.id === event.target.id ? {...theme, title: event.target.value} : theme)
        )
    }

    const handleSubjectIdChange = (id: string, subjectId: string) => {
        handleThemes(
            themes.map(theme => theme.id === id ? {...theme, subjectId: subjectId} : theme)
        )
    }

    React.useEffect(() => {
        console.log("current ", currentSubjectId);
    }, [currentSubjectId])

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
                        onChange={(event: SelectChangeEvent) => (setCurrentSubjectId(event.target.value))}
                    >
                        {subjects.map((subject) =>
                            <MenuItem value={subject.id}>{subject.title}</MenuItem>
                        )}
                    </Select>
                    </FormControl>
                    <List>
                        {themes.map((theme) => (theme.subjectId === currentSubjectId) &&
                            <TestsThemesItem theme={theme} subjects={subjects} handleTitleChange={handleTitleChange} handleSubjectIdChange={handleSubjectIdChange}/>
                        )}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default AllThemes;