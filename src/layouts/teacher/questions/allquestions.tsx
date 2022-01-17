import React from 'react';
import {Question, Subject, SubjectTheme} from "../config";
import {Button, Grid, Link, List, MenuItem, Paper, Tab, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import {NavLink} from "react-router-dom";
import {questionsMock} from "./questionsMock";
import {QuestionCard} from "./components/questionCard";
import {UseSubjectsContext} from "../Providers/SubjectsProvider";
import {UseThemesContext} from "../Providers/ThemesProvider";
import {questionsApi} from "../../../APIs/questionsService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {Loader} from "../../../components/Loader/Loader";

export const AllQuestions = () => {
    const {themes, currentThemeId, handleThemes, handleCurrentThemeId} = UseThemesContext();
    const {user} = UseUserStateContext();
    const {subjects} = UseSubjectsContext();
    const {enqueueSnackbar} = useSnackbar();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('');
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [filter, setFilter] = React.useState<string>('');

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleCurrentThemeId(event.target.value);
        setIsLoading(prev => !prev);
        questionsApi(user.token).getAll(event.target.value)
            .then(response => {
               response.data && setQuestions(response.data);
            })
            .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
            .finally(() => setIsLoading(prev => !prev))
    }

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSubjectId(event.target.value);
        handleCurrentThemeId('');
        handleThemes(event.target.value);
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Questions" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/teacher/questions/add" key="addQuestion" component={NavLink} sx={{ textDecoration: 'none' }}>
                        <Button fullWidth variant="contained" color="primary" disabled={currentThemeId === ''}>
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
                        {themes.map((theme) => ((theme.subjectId === currentSubjectId)) &&
                            <MenuItem key={theme.id} value={theme.id}>{theme.title}</MenuItem>
                        )}
                    </TextField>
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

                {questions
                    .filter(question =>
                        (question.title.toLowerCase().includes(filter.toLowerCase()) || question.questionBody.toLowerCase().includes(filter.toLowerCase())))
                    .map((question) =>
                        (question.idTheme === currentThemeId) &&
                            <Grid item xs={12}>
                                <QuestionCard key={question.id} questionState={question} isEditable={true}/>
                            </Grid>
                )}
            </Grid>
            <Loader show={isLoading} />
        </Paper>
    );
};