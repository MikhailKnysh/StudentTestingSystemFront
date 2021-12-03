import React from 'react';
import Box from "@mui/material/Box";
import {
    Avatar,
    Collapse, FormControl,
    IconButton,
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

type Props = {
    theme: SubjectTheme,
    subjects: Subject[],
    handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubjectIdChange: (id:string, subjectId:string)=>void
}

export const TestsThemesItem = (props: Props) => {
    const {theme, subjects, handleTitleChange, handleSubjectIdChange} = props;
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const [subjectToUpdate, setSubjectToUpdate] = React.useState<Subject>({id:'', title:''});

    return (
        <Box>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => setIsEditable(prev=>!prev)}>
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
                />
            </ListItem>
            <Collapse in={isEditable}>
                <TextField
                    sx={{px:"70px"}}
                    fullWidth
                    value={theme.title}
                    id = {theme.id}
                    onChange={handleTitleChange}
                />
                <FormControl fullWidth sx={{ml:"70px", pr:'140px', mt:'20px'}}>
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