import React from 'react';
import Box from "@mui/material/Box";
import {Button, TextField, Typography} from "@mui/material";
import {Subject} from "../config";

type Props = {
    handleSubjects: React.Dispatch<React.SetStateAction<Subject[]>>
}

const AddSubject = (props: Props) => {
    const {handleSubjects} = props;
    const [subjectToCreate, setSubjectToCreate] = React.useState<Subject>({id:'', title:''});
    const [count, setCount] = React.useState<number>(6);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectToCreate(prev => ({
            ...prev, title: event.target.value, id: count.toString()
        }));
    }
    const handleAdd = () => {
        handleSubjects(prev=>(
            [...prev, subjectToCreate]));
        setCount(prev=>++prev);
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