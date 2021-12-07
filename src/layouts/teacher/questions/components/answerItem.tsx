import React from 'react';
import {Grid, IconButton, InputAdornment, TextField} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Answer} from "../../config";

type Props = {
    answer: Answer,
    removeAnswer: (answer: Answer) => void
}

export const AnswerItem = (props: Props) => {
    const {answer, removeAnswer} = props;
    const [isActiveAnswer, setIsActiveAnswer] = React.useState<boolean>(false);

    return (
        <Grid item xs={6} sx={{display: 'flex'}}>
            <TextField
                sx={{m:1}}
                key={answer.body}
                focused={isActiveAnswer}
                fullWidth
                color='error'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton aria-label="correct answer">
                                {answer.isCorrect ? <CheckBoxIcon color='success'/> : <CancelIcon color='error'/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                value={answer.body}
            />
            <IconButton
                sx={{my:'auto'}}
                onClick={() => removeAnswer(answer)}
                onMouseEnter={() => setIsActiveAnswer(prev => !prev)}
                onMouseLeave={() => setIsActiveAnswer(prev => !prev)}
            >
                <DeleteOutlineIcon />
            </IconButton>
        </Grid>
    );
};