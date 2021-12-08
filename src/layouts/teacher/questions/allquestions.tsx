import React from 'react';
import {Subject, SubjectTheme} from "../config";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Tab,
    TextField
} from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {TestsThemesItem} from "../testsThemes/components/testsThemesItem";
import Divider from "@mui/material/Divider";
import {NavLink} from "react-router-dom";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleThemes: React.Dispatch<React.SetStateAction<SubjectTheme[]>>
}

export const AllQuestions = (props: Props) => {
    const {subjects, themes, handleThemes} = props;
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('0');
    const [currentThemesId, setCurrentThemesId] = React.useState<string>('0');

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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs value={0}>
                            <Tab label="Questions" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/teacher/questions/add" key="Bot table" component={NavLink} sx={{ textDecoration: 'none' }}>
                        <Button fullWidth variant="contained" color="primary" >
                            Add question
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        fullWidth
                        label="Subject"
                        id="select-subject"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => (setCurrentSubjectId(event.target.value))}
                    >
                        {subjects.map((subject) =>
                            <MenuItem value={subject.id}>{subject.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        fullWidth
                        label="Themes"
                        id="select-themes"
                    >
                        {themes.map((theme) => (theme.subjectId === currentSubjectId) &&
                            <MenuItem value={theme.id}>{theme.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
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