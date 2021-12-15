import React from 'react';
import {Question, User} from "../../config";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CssBaseline,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import {QuestionCard} from "./questionCard";

type Props = {
    user: User,
    handleNext: ()=>void,
    handlePrevious: ()=>void,
    questionState: Question
}

const StepReview = (props: Props) => {
    const { user, handleNext, handlePrevious, questionState } = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h6' sx={{mb:1}}>Make sure everything is right:</Typography>
            </Grid>
            <Grid item xs={12}>
            <QuestionCard user={user} questionState={questionState}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex'}}>
                <Button
                    variant='contained'
                    onClick={handlePrevious}
                >Back</Button>
                <Box sx={{flexGrow: 1}} />
                <Button
                    variant='contained'
                    onClick={handleNext}
                >Finish</Button>
            </Grid>
        </Grid>
    );
};

export default StepReview;