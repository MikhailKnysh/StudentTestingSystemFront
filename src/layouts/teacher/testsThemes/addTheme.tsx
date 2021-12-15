import Box from '@mui/material/Box/Box';
import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {SubjectTheme} from "../config";

type Props = {
    handleThemes: React.Dispatch<React.SetStateAction<SubjectTheme[]>>,
    currentSubjectId: string
}

export const AddTheme = (props: Props) => {
    const {handleThemes, currentSubjectId} = props

    const [count, setCount] = React.useState<number>(6);
    const [themeToAdd, setThemeToAdd] = React.useState<SubjectTheme>({title:'', id:'', subjectId:'', questionsQuantity: 0});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThemeToAdd(prev => ({...prev, title: event.target.value, id: count.toString()}));
    }
    const handleAdd = () => {
        handleThemes(prev => ([...prev, themeToAdd]));
        setCount(prev=> (++prev));
    }

    React.useEffect(()=>{
        setThemeToAdd(prev => ({...prev, subjectId: currentSubjectId}));
    }, [currentSubjectId])

    return (
        <Box sx={{display: "flex"}}>
            <Typography sx={{my: "auto", ml: '20px', minWidth: '110px'}} variant="h6">Add theme</Typography>
            <TextField
                sx={{ml:"20px"}}
                fullWidth
                required
                label='Title'
                value={themeToAdd.title}
                onChange={handleChange}
            />
            <TextField
                sx={{ml:"20px", width: '370px'}}
                label='Questions to pass'
                required
                type='number'
                inputProps={{min:0}}
                value={themeToAdd.questionsQuantity}
                onChange={(event) => setThemeToAdd(prev => ({...prev, questionsQuantity: Number(event.target.value)}))}
            />
            <Button
                variant='contained'
                sx={{ml:'20px', borderRadius: 1}} onClick={handleAdd}
                disabled={currentSubjectId === ''}
            >
                Add
            </Button>
        </Box>

    );
};