import React from 'react';
import Box from "@mui/material/Box";
import {
    Avatar,
    Collapse,
    IconButton,
    InputAdornment,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Divider from "@mui/material/Divider";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {Subject} from "../../config";
import {useSnackbar} from "notistack";
import {subjectApi} from "../../../../APIs/subjectService";
import {UseUserStateContext} from "../../../../Auth/AuthProvider";
import {UseSubjectsContext} from "../../Providers/SubjectsProvider";

type Props  = {
    subject: Subject,
    handleIsLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

export const SubjectItem = (props: Props) => {
    const { subject, handleIsLoading } = props;

    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const [subjectToUpdate, setSubjectToUpdate] = React.useState<Subject>(subject);
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const { handleSubjects } = UseSubjectsContext();

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSubjectToUpdate(prevState => ({...prevState, title:event.target.value}))
    }
    const ToggleEditable = () => setIsEditable(prev=>!prev);

    const handleClose = () => {
        setSubjectToUpdate((prevState) => ({...prevState, title:subject.title, id:subject.id}));
        ToggleEditable();
    }

    const handleUpdate = () =>
    {
        handleIsLoading(prev => !prev);

        subjectApi(user.token)
            .update(subjectToUpdate)
            .then(() =>
            {
                setIsEditable(prev => !prev);
                handleSubjects();
                handleIsLoading(prev => !prev);
            })
            .catch(error => enqueueSnackbar(error, { variant: 'error'}));
    }

    return (
        <Box>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={ToggleEditable}>
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: "#1976D2"}}>
                        <MenuBookTwoToneIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {subject.title}
                />
            </ListItem>
            <Collapse in={isEditable}>
                <Box>
                    <TextField
                        sx={{px:"70px"}}
                        fullWidth
                        value={subjectToUpdate.title}
                        id = {subjectToUpdate.id}
                        onChange={handleSubjectChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleUpdate}>
                                        <CheckIcon color="success"/>
                                    </IconButton>
                                    <IconButton onClick={handleClose}>
                                        <CloseIcon color="error"/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Collapse>
            <Divider sx={{mt:1}}/>

        </Box>
    );
};