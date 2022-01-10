import React from 'react';
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import {Subject} from "../config";
import {subjectApi} from "../../../APIs/subjectService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import { v4 as uuidv4 } from 'uuid';

const intialSubject: Subject = {id: uuidv4(), title:''};

type Props = {
    handleGetAll: () => void
}

const AddSubject = (props: Props) => {
    const { handleGetAll } = props;

    const [subjectToCreate, setSubjectToCreate] = React.useState<Subject>(intialSubject);
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectToCreate(prev => ({
            ...prev, title: event.target.value
        }));
    }

    const handleAdd = () =>
    {
        subjectApi(user.token)
            .create(subjectToCreate)
            .then(() => {
                setSubjectToCreate( intialSubject);
                handleGetAll();
            })
            .catch(error => enqueueSnackbar(error, { variant: 'error'}));
    }

    return (
        <Box sx={{display: "flex"}}>
            <Typography sx={{my: "auto", ml: '20px', minWidth: '110px'}} variant="h6">Add subject</Typography>
            <TextField
                sx={{px:"20px"}}
                fullWidth
                value={subjectToCreate.title}
                onChange={handleChange}
            />
            <Button variant='contained' sx={{borderRadius: 1}} onClick={handleAdd}>
                Add
            </Button>
        </Box>
    );
};

export default AddSubject;