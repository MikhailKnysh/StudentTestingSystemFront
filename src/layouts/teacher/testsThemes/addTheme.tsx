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
    const [themeToAdd, setThemeToAdd] = React.useState<SubjectTheme>({title:'', id:'', subjectId:''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThemeToAdd(prev => ({...prev, title: event.target.value, id: count.toString(), subjectId: currentSubjectId}));
    }
    const handleAdd = () => {
        handleThemes(prev => ([...prev, themeToAdd]));
        setCount(prev=> (++prev));
    }

    return (
        <Box sx={{display: "flex"}}>
            <Typography sx={{my: "auto", ml: '20px', minWidth: '110px'}} variant="h6">Add theme</Typography>
            <TextField
                sx={{px:"20px"}}
                fullWidth
                value={themeToAdd.title}
                onChange={handleChange}
            />
            <Button
                variant='contained'
                sx={{borderRadius: 1}} onClick={handleAdd}
                disabled={currentSubjectId === ''}
            >
                Add
            </Button>
        </Box>

    );
};