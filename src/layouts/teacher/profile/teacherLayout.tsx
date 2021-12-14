import React from "react";
import Box from "@mui/material/Box";
import {TeachersDrawer} from "../../../components/Drawer/teachersDrawer";
import {DrawerHeader} from "../../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../../components/Profile/UserLayout";
import {Route, Routes} from "react-router-dom";
import {AllSubjects} from "../subjects/allSubjects";
import {AllThemes} from "../testsThemes/allThemes";
import {Subject, SubjectTheme} from "../config";
import {CreateQuestion} from "../questions/createQuestion";
import {AllQuestions} from "../questions/allquestions";
import ShareTest from "../studentsTests/shareTest";
import CompletedTests from "../studentsTests/completedTests";
import {questionInitialState} from "../questions/config";

export const subjectsMock: Subject[] = [
    {id: "1", title: 'Math'},
    {id: "2", title: 'History'},
    {id: "3", title: 'English'},
    {id: "4", title: 'C#'},
    {id: "5", title: 'React'}
]
export const themesMock: SubjectTheme[] = [
    {id: "1", subjectId: '5', title: 'React', questionsQuantity: 10},
    {id: "2", subjectId: '5', title: 'React Native', questionsQuantity: 10},
    {id: "3", subjectId: '5', title: 'React Router Dom', questionsQuantity: 10},
    {id: "4", subjectId: '5', title: 'Mob x', questionsQuantity: 10},
    {id: "5", subjectId: '5', title: 'Redux', questionsQuantity: 10}
]
export const TeacherLayout = (props: any) => {
    const {user, handleUser} = props;
    const [subjects, setSubjects] = React.useState<Subject[]>(subjectsMock);
    const [themes, setThemes] = React.useState<SubjectTheme[]>(themesMock);
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');

    return (
        <Box sx={{display: 'flex'}}>
            <TeachersDrawer user={user} handleUser={handleUser}/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<UserLayout user={user} handleUser={handleUser}/>} />
                    <Route path="/subjects" element={<AllSubjects subjects={subjects} handleSubjects={setSubjects}/>} />
                    <Route path="/themes" element={<AllThemes subjects={subjects} themes={themes} handleThemes={setThemes}/>} />
                    <Route path="/questions/add" element={<CreateQuestion user={user} themeId={currentThemeId} questionInitialState={questionInitialState}/>} />
                    <Route path="/questions" element={<AllQuestions user={user} subjects={subjects} themes={themes} handleCurrentThemeId={setCurrentThemeId}/>}/>
                    <Route path="/tests" element={<CompletedTests handleCurrentThemeId={setCurrentThemeId} themes={themes} subjects={subjects}/>} />
                    <Route path="/tests/share" element={<ShareTest />} />
                </Routes>
            </Box>
        </Box>
    )
}