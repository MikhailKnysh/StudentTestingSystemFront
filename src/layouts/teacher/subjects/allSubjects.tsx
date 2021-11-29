import React from 'react';
import {
    Avatar,
    Grid, IconButton,
    ListItem, ListItemAvatar,
    ListItemText, TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import EditIcon from '@mui/icons-material/Edit';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import {Subject} from "../config";

const subjectsMock: Subject[] = [
    {id: "1", title: 'Math'},
    {id: "2", title: 'History'},
    {id: "3", title: 'English'},
    {id: "4", title: 'Ukrainian'},
    {id: "5", title: 'C#'}
]

export const AllSubjects = () => {
    const [subjects, setSubjects] = React.useState<Subject[]>(subjectsMock);
    const [subjectToUpdate, setSubjectToUpdate] = React.useState<Subject>({id:'', title:''});
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjects(
            subjects.map(subject => subject.id === event.target.id ? {...subject, title: event.target.value} : subject)
        )
    }
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Subjects
                    </Typography>
                        <List>
                            {subjects.map((subject) =>
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
                                    {isEditable &&
                                        <TextField
                                        value={subject.title}
                                        id = {subject.id}
                                        onChange={handleChange}
                                        />
                                    }
                                </Box>,
                            )}
                        </List>
                </Grid>
            </Grid>
        </Box>
    );
};

