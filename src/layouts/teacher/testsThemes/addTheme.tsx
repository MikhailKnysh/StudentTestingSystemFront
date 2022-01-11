import Box from '@mui/material/Box/Box';
import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {SubjectTheme} from "../config";
import {themeApi} from "../../../APIs/themesService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import { v4 as uuidv4 } from 'uuid';

type Props = {
    currentSubjectId: string
}
const themeInitState: SubjectTheme = {title:'', id: uuidv4(), subjectId:'', questionsQuantity: 0};

export const AddTheme = (props: Props) => {
    const {currentSubjectId} = props

    const [themeToAdd, setThemeToAdd] = React.useState<SubjectTheme>(themeInitState);
    const {user} = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThemeToAdd(prev => ({...prev, title: event.target.value}));
    }
    const handleAdd = () => {
        console.log(themeToAdd);
        themeApi(user.token).create(themeToAdd)
            .then(() => {
                setThemeToAdd(prev => ({...prev, title:'', questionsQuantity: 0}));
            })
            .catch(error => {
                let message = error.message;
                error.response.data.items?.map((i:string) => message += `| ${i}`);
                enqueueSnackbar(message, {variant: 'error'})
            });
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