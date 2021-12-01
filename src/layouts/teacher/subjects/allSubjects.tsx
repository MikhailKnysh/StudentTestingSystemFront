import React from 'react';
import {
    Grid, Paper, Tab,
    Typography
} from "@mui/material";
import List from "@mui/material/List";
import {Subject} from "../config";
import {SubjectItem} from "./components/subjectItem";
import AddSubject from "./addSubject";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

type Props = {
    subjects: Subject[],
    handleSubjects: React.Dispatch<React.SetStateAction<Subject[]>>
}

export const AllSubjects = (props: Props) => {
    const {subjects, handleSubjects} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSubjects(
            subjects.map(subject => subject.id === event.target.id ? {...subject, title: event.target.value} : subject)
        )
    }
    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={0}>
                <Tab label="Subjects" />
            </Tabs>
            </Box>
            <Grid spacing={2}>
                <Grid item xs={12}>
                    <AddSubject handleSubjects={handleSubjects}/>
                        <List>
                            {subjects.map((subject) =>
                                <SubjectItem subject={subject} handleChange={handleChange}/>
                            )}
                        </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

