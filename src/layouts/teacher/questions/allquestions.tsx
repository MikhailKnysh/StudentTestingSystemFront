import React from 'react';
import {Question, Subject, SubjectTheme} from "../config";
import {Button, Grid, Link, List, MenuItem, Paper, Tab, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import {NavLink} from "react-router-dom";
import {questionsMock} from "./questionsMock";
import {QuestionCard} from "./components/questionCard";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleCurrentThemeId: React.Dispatch<React.SetStateAction<string>>
}

export const AllQuestions = (props: Props) => {
    const {subjects, themes, handleCurrentThemeId} = props;
    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('');
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');
    const [questions, setQuestions] = React.useState<Question[]>(questionsMock);
    const [filter, setFilter] = React.useState<string>('');

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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0}>
                            <Tab label="Questions" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/teacher/questions/add" key="Bot table" component={NavLink} sx={{ textDecoration: 'none' }}>
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
                    .filter(questions =>
                        (questions.title.toLowerCase().includes(filter.toLowerCase()) || questions.questionBody.toLowerCase().includes(filter.toLowerCase())))
                    .map((question) =>
                        (question.idTheme === currentThemeId) &&
                            <Grid item xs={12}>
                                <QuestionCard key={question.id} questionState={question} />
                            </Grid>
                )}
            </Grid>
        </Paper>
    );
};