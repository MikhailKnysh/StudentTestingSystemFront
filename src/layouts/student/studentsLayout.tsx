import Box from "@mui/material/Box";
import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../components/Profile/UserLayout";
import {Route, Routes} from "react-router-dom";
import {AllSubjects} from "../teacher/subjects/allSubjects";
import CompletedTests from "../teacher/studentsTests/completedTests";
import {Subject, SubjectTheme} from "../teacher/config";
import {subjectsMock, themesMock} from "../teacher/profile/teacherLayout";
import {AvailableTests} from "./availableTests/availableTests";
import {StudentTesting} from "./availableTests/studentTesting";

export const StudentsLayout = (props: any) => {
    const {user, handleUser} = props;
    const [subjects, setSubjects] = React.useState<Subject[]>(subjectsMock);
    const [themes, setThemes] = React.useState<SubjectTheme[]>(themesMock);
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');

    return (
        <Box sx={{display: 'flex'}}>
            <StudentsDrawer user={user} handleUser={handleUser} />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<UserLayout user={user} handleUser={handleUser}/>} />
                    <Route path="/available" element={<AvailableTests subjects={subjects} handleCurrentThemeId={setCurrentThemeId}/>} />
                    <Route path="/completed" element={<CompletedTests subjects={subjects} themes={themes} handleCurrentThemeId={setCurrentThemeId}/>} />
                    <Route path="/available/testing" element={<StudentTesting user={user} currentThemeId={currentThemeId}/>} />
                </Routes>
            </Box>
        </Box>
    )
}