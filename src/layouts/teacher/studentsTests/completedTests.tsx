import React from 'react';
import {Button, Grid, Link, MenuItem, Paper, Tab, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {NavLink} from "react-router-dom";
import {Group, StudentsTest, Subject, SubjectTheme} from "../config";
import {StudentTestMock} from "./studentTestMock";
import {TestItem} from "../../../components/TestItem/TestItem";
import {TabPanel} from "../../../components/Profile/UserLayout";
import {Groups} from "./groupMock";
import {TransferList} from "./components/transferList";

type Props = {
    subjects: Subject[],
    themes: SubjectTheme[],
    handleCurrentThemeId: React.Dispatch<React.SetStateAction<string>>
}

const CompletedTests = (props: Props) => {
    const {subjects, themes, handleCurrentThemeId} = props;

    const [currentSubjectId, setCurrentSubjectId] = React.useState<string>('');
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');
    const [studentTests, setStudentTests] = React.useState<StudentsTest[]>(StudentTestMock);
    const [filter, setFilter] = React.useState<string>('');
    const [tab, setTab] = React.useState(0);
    const [groups, setGroups] = React.useState<Group[]>(Groups);
    const [currentGroup, setCurrentGroup] = React.useState<Group>(groups[1]);

    const handleCurrentGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
       const current = groups.find(group => group.id === event.target.value);
        setCurrentGroup(current || groups[0]);
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSubjectId(event.target.value);
        setCurrentThemeId('');
    }

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentThemeId(event.target.value);
        handleCurrentThemeId(event.target.value);
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={tab} onChange={handleTabChange}>
                            <Tab value={0} label="Completed Tests" />
                            <Tab value={1} label="Assign tests" />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        fullWidth
                        label="Subject"
                        id="select-subject"
                        value={currentSubjectId}
                        onChange={handleSubjectChange}
                    >
                        {subjects.map((subject) =>
                            <MenuItem key={subject.id} value={subject.id}>{subject.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        fullWidth
                        label="Themes"
                        id="select-themes"
                        value={currentThemeId}
                        onChange={handleThemeChange}
                    >
                        {themes.map((theme) => (theme.subjectId === currentSubjectId) &&
                            <MenuItem key={theme.id} value={theme.id}>{theme.title}</MenuItem>
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={tab} index={0} >
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    key="filter"
                                    label="Search..."
                                    fullWidth
                                    value={filter}
                                    onChange={(event) => setFilter(event.target.value)}
                                />
                            </Grid>
                            {studentTests
                                .filter(test => test.title.toLowerCase().includes(filter.toLowerCase()))
                                .map((test) => (test.idTheme === currentThemeId) &&
                                    <Grid item xs={12}>
                                        <TestItem key={test.id} test={test} />
                                    </Grid>
                                )}
                        </Grid>
                    </TabPanel>
                </Grid>
                <Grid item xs={12}>
                <TabPanel index={1} value={tab}>
                    <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            select
                            fullWidth
                            label="Groups"
                            id="select-groups"
                            value={currentGroup.id}
                            onChange={handleCurrentGroup}
                        >
                            {groups.map((group) =>
                                <MenuItem key={group.id} value={group.id}>{group.title}</MenuItem>
                            )}
                        </TextField>
                    </Grid>
                        <Grid xs={12}>
                            <TransferList students={currentGroup.users} themeId={currentThemeId} />
                        </Grid>
                    </Grid>
                </TabPanel>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CompletedTests;