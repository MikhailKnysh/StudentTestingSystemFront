import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';
import {questionsSteps} from "./config";
import {ColorLibStepIcon} from "./components/colorLibStepIcon";

export const CreateQuestion = () => {
    return (
        <Paper elevation={3} sx={{mx:'auto', maxWidth:'800px', minHeight: '600px', p:4}}>
            <Stack spacing={4}>
                <Stepper>
                    {questionsSteps.map((step) => (
                        <Step key={step}>
                            <StepLabel StepIconComponent={ColorLibStepIcon}>
                                {step}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
        </Paper>
    );
};