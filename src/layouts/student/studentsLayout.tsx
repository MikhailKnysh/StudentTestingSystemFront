import Box from "@mui/material/Box";
import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../components/Profile/UserLayout";
import {Route, Routes} from "react-router-dom";
import {AvailableTest, StudentsTest, Subject, SubjectTheme} from "../teacher/config";
import {subjectsMock, themesMock} from "../teacher/teacherLayout";
import {AvailableTests} from "./availableTests/availableTests";
import {StudentTesting} from "./availableTests/studentTesting";
import {ResultTest} from "./availableTests/resultTest";
import {StudentTestMock} from "../teacher/studentsTests/studentTestMock";
import {CompletedTests} from "./completedTests/completedTests";
import {availableTestsInit} from "./availableTests/availableTestsInit";

export const StudentsLayout = () => {
    const [subjects, setSubjects] = React.useState<Subject[]>(subjectsMock);
    const [themes, setThemes] = React.useState<SubjectTheme[]>(themesMock);
    const [complitedTest, setComplitedTest] = React.useState<StudentsTest>(StudentTestMock[0]);
    const [currentAvailableTest, setCurrentAvailableTest] = React.useState<AvailableTest>(availableTestsInit[0]);

    return (
        <Box sx={{display: 'flex'}}>
            <StudentsDrawer />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<UserLayout />} />
                    <Route path="/available" element={<AvailableTests subjects={subjects} handleAvailableTest={setCurrentAvailableTest}/>} />
                    <Route path="/completed" element={<CompletedTests />} />
                    <Route path="/available/testing" element={<StudentTesting currentAvailableTest={currentAvailableTest} handleCompletedTest={setComplitedTest}/>} />
                    <Route path="/available/result" element={<ResultTest test={complitedTest}/>} />
                </Routes>
            </Box>
        </Box>
    )
}
