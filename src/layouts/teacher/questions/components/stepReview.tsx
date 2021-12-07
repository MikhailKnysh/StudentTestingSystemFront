import React from 'react';
import {Question} from "../../config";
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
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {blue} from "@mui/material/colors";
import {AnswersView} from "./answersView";

type Props = {
    handleNext: ()=>void,
    handlePrevious: ()=>void,
    questionState: Question,
}

const StepReview = (props: Props) => {
    const { handleNext, handlePrevious, questionState} = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h6' sx={{mb:1}}>Make sure everything is right:</Typography>
            </Grid>
            <Card sx={{width: '100%'}}>
                <CardHeader
                    sx={{textAlign: 'left'}}
                    avatar={<Avatar sx={{bgcolor: blue[700]}}><QuestionAnswerIcon /></Avatar>}
                    title={questionState.title}
                />
                {questionState.imageLink &&
                    <CardMedia
                        component='img'
                        image={questionState.imageLink}
                        alt='question'
                    />
                }
                <CardContent>
                    <Typography>
                        {questionState.questionBody}
                    </Typography>
                    <Grid container spacing={2} sx={{mt:2}}>
                    {questionState.answers.map(answer =>
                        <Grid item xs={6} >
                            <AnswersView answer={answer} />
                        </Grid>
                    )}
                    </Grid>
                </CardContent>
            </Card>
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