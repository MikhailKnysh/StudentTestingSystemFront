import React from 'react';
import {Grid, Paper, TextField, Typography} from "@mui/material";
import {StudentsTest} from "../../layouts/teacher/config";

type Props = {
    test: StudentsTest
}

export const TestItem = (props: Props) => {
    const {test} = props;

    return (
        <Paper sx={{p:2}}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6">
                        {test.title}
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
                        fullWidth
                        margin="normal"
                        value={Date.now() - 150000}
                        key="timeStart"
                        label="Time start"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        disabled
                        fullWidth
                        margin="normal"
                        value={Date.now()}
                        key="timeFinish"
                        label="Time finish"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        disabled
                        fullWidth
                        margin="normal"
                        value={test.timePreparation}
                        key="timePreparation"
                        label="Time preparation"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};