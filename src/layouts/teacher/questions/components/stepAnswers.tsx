import React from 'react';
import {Answer, Question} from "../../config";
import Box from "@mui/material/Box";
import {
    Button,
    Grid, IconButton, InputAdornment,
    TextField, ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {answerInitialState} from "../config";
import Divider from "@mui/material/Divider";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {AnswerItem} from "./answerItem";

type Props = {
    step: number,
    handleNext: ()=>void,
    handlePrevious: ()=>void,
    questionState: Question,
    handleQuestionState: React.Dispatch<React.SetStateAction<Question>>
}

const StepAnswers = (props: Props) => {
    const {step, handleNext, handlePrevious, questionState, handleQuestionState} = props;
    const [answerState, setAnswerState] = React.useState<Answer>(answerInitialState);

    const addAnswer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleQuestionState((prevState) => ({...prevState, answers: [...prevState.answers, answerState]}));
    }

    const handleAnswerBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerState(prev => ({...prev, body: event.target.value}))
    }

    const removeAnswer = (answer: Answer) => {
        const answers = questionState.answers.filter(ans => ans !== answer);
        handleQuestionState(prev => ({...prev, answers: answers}));
    }

    return (
        <>
            <Grid container component='form' spacing={2} onSubmit={addAnswer}>
                <Grid item xs={12}>
                    <Typography variant='h6'>Add answers</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        required
                        fullWidth
                        label='New answer'
                        value={answerState.body}
                        onChange={handleAnswerBody}
                    />
                </Grid>
                <Grid item xs={4}>
                    <ToggleButtonGroup
                        value={answerState.isCorrect}
                        size='large'
                        color='primary'
                        onChange={(event, newIsCorrect: boolean)=>setAnswerState(prevState => ({...prevState, isCorrect:newIsCorrect}))}
                        exclusive
                    >
                        <ToggleButton value={true}>Correct</ToggleButton>
                        <ToggleButton value={false}>Incorrect</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' type='submit'>Add answer</Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Grid>

        <Grid container component='form' spacing={2} alignItems='center' onSubmit={handleNext} sx={{mt:2}}>
                {questionState.answers.map(answer =>
                    <AnswerItem answer={answer} removeAnswer={removeAnswer} />
                )}
            <Grid item xs={12} sx={{display: 'flex'}}>
                <Button
                    variant='contained'
                    onClick={handlePrevious}
                >Back</Button>
                <Box sx={{flexGrow: 1}} />
                <Button
                    variant='contained'
                    type='submit'
                >Next</Button>
            </Grid>
        </Grid>
        </>
    );
};

export default StepAnswers;