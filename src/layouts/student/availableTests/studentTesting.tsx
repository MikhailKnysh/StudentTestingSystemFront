import React from 'react';
import {Question, User} from "../../teacher/config";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {QuestionCard} from "../../teacher/questions/components/questionCard";
import Box from "@mui/material/Box";
import {questionInitialState} from "../../teacher/questions/config";
import {availableTestsMock} from "./availableTestsMock";
import {testMock} from "./testMock";

type Props = {
    user: User,
    currentThemeId: string
}

export const StudentTesting = (props: Props) => {
    const {user, currentThemeId} = props;
    const [question, setQuestion] = React.useState<Question>(testMock[0]);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);

    const handleNext = () => {
        setCurrentQuestion(prev => ++prev);
        setQuestion(testMock[currentQuestion]);
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h6' sx={{mb:1}}>Time limit:</Typography>
            </Grid>
            <Grid item xs={12}>
            <QuestionCard questionState={question} />
            </Grid>

            <Grid item xs={12} sx={{display: 'flex'}}>
                <Box sx={{flexGrow: 1}} />
                {currentQuestion < testMock.length
                    ? <Button
                        variant='contained'
                        onClick={handleNext}
                    >Next</Button>
                    : <Button
                        variant='contained'
                    >Finish</Button>
                }
            </Grid>
        </Grid>
        </Paper>
    );
};