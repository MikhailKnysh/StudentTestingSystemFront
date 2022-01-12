import React from 'react';
import {
    Button, Card, CardMedia,
    FormControlLabel,
    Grid,
    MenuItem,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import {Question} from "../../config";
import {questionDifficultyList, questionTypeList} from "../config";
import Box from "@mui/material/Box";
import TimePicker from '@mui/lab/TimePicker';
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

type Props = {
    step: number,
    handleNext: ()=>void,
    questionState: Question,
    handleQuestionState: React.Dispatch<React.SetStateAction<Question>>
}

const StepQuestion = (props: Props) => {
    const {step, handleNext, questionState, handleQuestionState} = props;

    const handleChange = ( prop: keyof Question) => (event: React.ChangeEvent<HTMLInputElement>) => {
        handleQuestionState(prev => ({...prev, [prop]:event.target.value}));
    }

    React.useEffect(() => {
        if (questionState.timeLimitDate.getMinutes() < 1 && questionState.timeLimitDate.getSeconds() < 10)
        {
            handleQuestionState(prev => ({...prev, timeLimitDate: new Date(10000)}));
        }
        console.log(questionState.timeLimitDate);
    }, [questionState.timeLimitDate])

    return (
        <Grid container component='form' spacing={2} onSubmit={handleNext}>
            <Grid item xs={12}>
                <Typography variant='h6'>Create Question</Typography>
            </Grid>
              <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        value={questionState.title}
                        label='Title'
                        onChange={handleChange('title')}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        select
                        fullWidth
                        defaultValue={questionState.type}
                        value={questionState.type}
                        label='Type'
                        onChange={handleChange('type')}
                    >
                        {questionTypeList.map(value =>
                            <MenuItem key={value} value={value}>{value}</MenuItem>
                        )}
                    </TextField>
                </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    ampm={false}
                    ampmInClock={false}
                    views={['minutes', 'seconds']}
                    inputFormat="mm:ss"
                    mask="__:__"
                    label="Minutes and seconds"
                    value={questionState.timeLimitDate}
                    onChange={(newValue) =>
                        handleQuestionState(prev => ({...prev, timeLimitDate: newValue || new Date(10000)}))
                    }
                    renderInput={(params) => <TextField fullWidth {...params} />}
                />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    select
                    fullWidth
                    defaultValue={questionState.difficulty}
                    value={questionState.difficulty}
                    label='Difficulty'
                    onChange={handleChange('difficulty')}
                >
                    {questionDifficultyList.map(value =>
                        <MenuItem key={value.value} value={value.value}>{value.key}</MenuItem>
                    )}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={questionState.linkForHelp}
                    type='url'
                    fullWidth
                    label='Link for help'
                    onChange={handleChange('linkForHelp')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={questionState.imageLink}
                    type='url'
                    fullWidth
                    label='Image link'
                    onChange={handleChange('imageLink')}
                />
            </Grid>
            {questionState.imageLink &&
            <Grid item xs={12}>
            <Card elevation={3} sx={{ p:2}}>
                <CardMedia
                    component='img'
                    image={questionState.imageLink}
                    alt='question'
                />
            </Card>
            </Grid>
            }
            <Grid item xs={12}>
                <TextField
                    value={questionState.questionBody}
                    multiline
                    required
                    fullWidth
                    label='Question text'
                    onChange={handleChange('questionBody')}
                />
            </Grid>
            <Grid item xs={4}>
                <FormControlLabel control={
                    <Switch
                        onChange={()=>(handleQuestionState(prev => ({...prev, isDisabled: !prev.isDisabled})))}
                        checked={!questionState.isDisabled}/>}

                  label={questionState.isDisabled
                      ? 'Question is disabled'
                      : 'Question is enabled'}
                />
            </Grid>
            <Grid item xs={12} sx={{display: 'flex'}}>
                <Box sx={{flexGrow: 1}} />
                <Button
                    variant='contained'
                    type='submit'
                >Next</Button>
            </Grid>
        </Grid>
    );
};

export default StepQuestion;