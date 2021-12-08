import React from 'react';
import {Button, Grid, Link, MenuItem, Paper, Tab, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {NavLink} from "react-router-dom";
import Divider from "@mui/material/Divider";
import {StudentsTest, Subject, SubjectTheme} from "../config";
import {StudentTestMock} from "./studentTestMock";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleCurrentThemeId: React.Dispatch<React.SetStateAction<string>>
}

const CompletedTests = (props: Props) => {
    const {subjects, themes, handleCurrentThemeId} = props;

    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('');
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');
    const [studentTests, setStudentTests] = React.useState<StudentsTest[]>(StudentTestMock);

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSubjectId(event.target.value);
        setCurrentThemeId('');
    }

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentThemeId(event.target.value);
        handleCurrentThemeId(event.target.value);
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs value={0}>
                            <Tab label="Completed Tests" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/teacher/tests/share" key="completedTests" component={NavLink} sx={{ textDecoration: 'none' }}>
                        <Button fullWidth variant="contained" color="primary" disabled={currentThemeId === ''}>
                            Share test
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
                        value={currentSubjectId}
                        onChange={handleSubjectChange}
                    >
                        {subjects.map((subject) =>
                            <MenuItem key={subject.id} value={subject.id}>{subject.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        fullWidth
                        label="Themes"
                        id="select-themes"
                        value={currentThemeId}
                        onChange={handleThemeChange}
                    >
                        {themes.map((theme) => (theme.subjectId === currentSubjectId) &&
                            <MenuItem key={theme.id} value={theme.id}>{theme.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {studentTests.map((test) => (test.idTheme === currentThemeId) &&
                    <Grid item xs={12}>
                        <Paper sx={{m:'2', p:'2'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Test Name
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.mark}
                                        key="mark"
                                        label="Test mark"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.countOfHelpChecks}
                                        key="countOfHelpChecks"
                                        label="Count of help checks"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.timePreparation}
                                        key="timePreparation"
                                        label="Time preparation"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.dateTimeStart}
                                        key="timeStart"
                                        label="Time start"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.dateTimeFinish}
                                        key="timeFinish"
                                        label="Time finish"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        disabled
                                        margin="normal"
                                        fullWidth
                                        value={test.idUser}
                                        key="student"
                                        label="Student"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};

export default CompletedTests;