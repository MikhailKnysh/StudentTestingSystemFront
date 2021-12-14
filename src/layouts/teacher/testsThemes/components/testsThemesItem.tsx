import React from 'react';
import Box from "@mui/material/Box";
import {
    Avatar,
    Collapse, FormControl,
    IconButton, InputAdornment,
    InputLabel,
    ListItem,
    ListItemAvatar,
    ListItemText, MenuItem, Select, SelectChangeEvent,
    TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FeedIcon from '@mui/icons-material/Feed';
import {Subject, SubjectTheme} from "../../config";
import Divider from "@mui/material/Divider";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    theme: SubjectTheme,
    subjects: Subject[],
    handleThemeChange: (themeToUpdate: SubjectTheme)=>void,
    handleSubjectIdChange: (id:string, subjectId:string)=>void
}

export const TestsThemesItem = (props: Props) => {
    const {theme, subjects, handleThemeChange, handleSubjectIdChange} = props;
    const [themeToUpdate, setThemeToUpdate] = React.useState<SubjectTheme>(theme);
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const handleTheme = () => {
        handleThemeChange(themeToUpdate);
        ToggleEditable();
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setThemeToUpdate(prevState => ({...prevState, title:event.target.value}));
    }
    const ToggleEditable = () => setIsEditable(prev=>!prev);
    const handleClose = () => {
        setThemeToUpdate((prevState) => ({...prevState, title:theme.title, id:theme.id, subjectId:theme.subjectId}));
        ToggleEditable();
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
                        <FeedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {theme.title}
                    secondary={'Questions to pass test: ' + theme.questionsQuantity.toString()}
                />
            </ListItem>
            <Collapse in={isEditable} sx={{px:'70px'}}>
                <TextField
                    sx={{mt:1}}
                    fullWidth
                    label='Title'
                    value={themeToUpdate.title}
                    id = {themeToUpdate.id}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTheme}>
                                    <CheckIcon color="success"/>
                                </IconButton>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon color="error"/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={{ mt:'20px'}}
                    fullWidth
                    required
                    type='number'
                    inputProps={{min: 0}}
                    label='Questions to pass test'
                    value={themeToUpdate.questionsQuantity}
                    onChange={(event) => setThemeToUpdate(prev => ({...prev, questionsQuantity: Number(event.target.value)}))}
                />
                <FormControl fullWidth sx={{mt:'20px'}}>
                    <InputLabel id="select-subject">Subject</InputLabel>
                    <Select
                        labelId="select-subject"
                        id="select-subject"
                        label="Subject"
                        value={theme.subjectId}
                        onChange={(event: SelectChangeEvent) => (handleSubjectIdChange(theme.id, event.target.value))}
                    >
                        {subjects.map((subject) =>
                            <MenuItem value={subject.id}>{subject.title}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Collapse>
            <Divider sx={{mt:1}}/>
        </Box>
    );
};