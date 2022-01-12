import React from 'react';
import {Question, User} from "../../config";
import {
    Button,
    Grid,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import {QuestionCard} from "./questionCard";
import {UseUserStateContext} from "../../../../Auth/AuthProvider";
import {questionsApi} from "../../../../APIs/questionsService";
import {useSnackbar} from "notistack";
import {Loader} from "../../../../components/Loader/Loader";

type Props = {
    handleNext: ()=>void,
    handlePrevious: ()=>void,
    questionState: Question,
    isUpdate: boolean
}

const StepReview = (props: Props) => {
    const { handleNext, handlePrevious, questionState, isUpdate } = props;
    const {user} = UseUserStateContext();
    const {enqueueSnackbar} = useSnackbar();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleFinish = () => {
        console.log(questionState);
        setIsLoading(prev => !prev);
        if (isUpdate){
            questionsApi(user.token).update(questionState)
                .then(() => handleNext())
                .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
                .finally(() => setIsLoading(prev => !prev));
        } else {
            questionsApi(user.token).create(questionState)
                .then(() => handleNext())
                .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
                .finally(() => setIsLoading(prev => !prev));
        }
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h6' sx={{mb:1}}>Make sure everything is right:</Typography>
            </Grid>
            <Grid item xs={12}>
            <QuestionCard questionState={questionState}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex'}}>
                <Button
                    variant='contained'
                    onClick={handlePrevious}
                >Back</Button>
                <Box sx={{flexGrow: 1}} />
                <Button
                    variant='contained'
                    onClick={handleFinish}
                >Finish</Button>
            </Grid>
            <Loader show={isLoading} />
        </Grid>
    );
};

export default StepReview;