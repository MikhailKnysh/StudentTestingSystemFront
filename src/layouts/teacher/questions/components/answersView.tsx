import React from 'react';
import {Answer} from "../../config";
import {Checkbox, Paper, Typography} from "@mui/material";

type Props = {
    answer: Answer
}

export const AnswersView = (props: Props) => {
    const {answer} = props;

    return (
        <Paper sx={{display: 'flex', alignItems:'center'}}>
            <Checkbox checked={answer.isCorrect} disabled/>
            <Typography>
                {answer.body}
            </Typography>
        </Paper>
    );
};