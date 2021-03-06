import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';
import {questionsSteps} from "./config";
import {ColorLibStepIcon} from "./components/colorLibStepIcon";
import {StepContentContainer} from "./components/stepContentContainer";
import {Question, User} from "../config";
import {Button, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {NavLink} from "react-router-dom";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {UseThemesContext} from "../Providers/ThemesProvider";

type Props = {
    isUpdate: boolean,
    questionInitialState: Question
}

export const CreateQuestion = (props: Props) => {
    const {questionInitialState, isUpdate} = props;
    const [step, setStep] = React.useState(0);
    const [questionState, setQuestionState] = React.useState<Question>(questionInitialState);


    return (
        <Paper elevation={3} sx={{mx:'auto', maxWidth:'800px', minHeight: '600px', p:4}}>
            <Stack spacing={4}>
                <Stepper activeStep={step}>
                    {questionsSteps.map((step) => (
                        <Step key={step}>
                            <StepLabel StepIconComponent={ColorLibStepIcon}>
                                {step}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {step === questionsSteps.length ? (
                    <Stack >
                        <Box>
                            <Typography variant="h5" gutterBottom>
                                Success! You {isUpdate ? "updated" : "created new"} question!
                            </Typography>
                            <Typography variant="subtitle1">You can add more questions or go to all questions.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
                            <Link to="/teacher/questions" key="Bot table" component={NavLink} sx={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" >
                                    All questions
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary" onClick={() => setStep(0)}>
                                Add more
                            </Button>
                        </Box>
                    </Stack>
                ) : (
                    <Stack sx={{ width: '100%' }}>
                        <StepContentContainer
                            step={step}
                            handleStep={setStep}
                            questionState={questionState}
                            handleQuestionState={setQuestionState}
                            isUpdate={isUpdate}
                        />
                    </Stack>
                )}
            </Stack>
        </Paper>
    );
};