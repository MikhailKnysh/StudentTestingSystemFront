import React from "react";
import Box from "@mui/material/Box";
import {TeachersDrawer} from "../../components/Drawer/teachersDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../components/Profile/UserLayout";
import {Route, Routes} from "react-router-dom";
import {AllSubjects} from "./subjects/allSubjects";
import {AllThemes} from "./testsThemes/allThemes";
import {Subject, SubjectTheme} from "./config";
import {CreateQuestion} from "./questions/createQuestion";
import {AllQuestions} from "./questions/allquestions";
import ShareTest from "./studentsTests/shareTest";
import CompletedTests from "./studentsTests/completedTests";
import {questionInitialState} from "./questions/config";
import {SubjectsProvider} from "./Providers/SubjectsProvider";
import {ThemesProvider} from "./Providers/ThemesProvider";

export const subjectsMock: Subject[] = [
    {id: "1", title: 'Math'},
    {id: "2", title: 'History'},
    {id: "3", title: 'English'},
    {id: "4", title: 'C#'},
    {id: "5", title: 'React'}
]
export const themesMock: SubjectTheme[] = [
    {id: "1", subjectId: 'e2afd622-c812-465e-ae20-08d9d124fadf', title: 'React', questionsQuantity: 10},
    {id: "2", subjectId: 'e2afd622-c812-465e-ae20-08d9d124fadf', title: 'React Native', questionsQuantity: 10},
    {id: "3", subjectId: 'e2afd622-c812-465e-ae20-08d9d124fadf', title: 'React Router Dom', questionsQuantity: 10},
    {id: "4", subjectId: '5', title: 'Mob x', questionsQuantity: 10},
    {id: "5", subjectId: '5', title: 'Redux', questionsQuantity: 10}
]
export const TeacherLayout = () => {
    const [themes, setThemes] = React.useState<SubjectTheme[]>(themesMock);
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');

    return (
        <Box sx={{display: 'flex'}}>
            <TeachersDrawer />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <SubjectsProvider>
                    <ThemesProvider>
                        <Routes>
                            <Route path="/" element={<UserLayout />} />
                            <Route path="/subjects" element={<AllSubjects />} />
                            <Route path="/themes" element={<AllThemes />} />
                            <Route path="/questions/add" element={<CreateQuestion themeId={currentThemeId} questionInitialState={questionInitialState}/>} />
                            <Route path="/questions" element={<AllQuestions themes={themes} handleCurrentThemeId={setCurrentThemeId}/>}/>
                            <Route path="/tests" element={<CompletedTests handleCurrentThemeId={setCurrentThemeId} themes={themes} />} />
                            <Route path="/tests/share" element={<ShareTest />} />
                        </Routes>
                    </ThemesProvider>
                </SubjectsProvider>
            </Box>
        </Box>
    )
}