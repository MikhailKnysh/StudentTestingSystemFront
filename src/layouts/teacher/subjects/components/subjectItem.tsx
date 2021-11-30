import React from 'react';
import Box from "@mui/material/Box";
import {Avatar, Collapse, IconButton, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import {Subject} from "../../config";
import Divider from "@mui/material/Divider";

export const SubjectItem = (props: any) => {
    const {subject, handleChange} = props;
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
                        <MenuBookTwoToneIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {subject.title}
                />
            </ListItem>
            <Collapse in={isEditable}>
            <TextField
                sx={{px:"70px"}}
                fullWidth
                value={subject.title}
                id = {subject.id}
                onChange={handleChange}
            />
            </Collapse>
            <Divider sx={{mt:1}}/>
        </Box>
    );
};