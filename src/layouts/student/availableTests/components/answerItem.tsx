import React from 'react';
import {Checkbox, Paper, Radio, Typography} from "@mui/material";
import {Answer} from "../../../teacher/config";

type Props = {
    answer: Answer,
    isDisabled: boolean
}

export const AnswerItem = (props: Props) => {
    const {answer, isDisabled} = props;

    return (
        <Paper sx={{display: 'flex', alignItems:'center'}}>
            <Radio value={answer.id} disabled={isDisabled}/>
            <Typography>
                {answer.body}
            </Typography>
        </Paper>
    );
};