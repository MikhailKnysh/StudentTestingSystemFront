import React from "react";
import Box from "@mui/material/Box";
import {TeachersDrawer} from "../../../components/Drawer/teachersDrawer";
import {DrawerHeader} from "../../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../../components/Profile/UserLayout";
import {Route, Routes} from "react-router-dom";
import {AllSubjects} from "../subjects/allSubjects";

export const TeacherLayout = (props: any) => {
    const {user, handleUser} = props;

    return (
        <Box sx={{display: 'flex'}}>
            <TeachersDrawer user={user} handleUser={handleUser}/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<UserLayout user={user} handleUser={handleUser}/>} />
                    <Route path="/subjects" element={<AllSubjects />} />
                    <Route path="/themes" element={<UserLayout user={user} handleUser={handleUser}/>} />
                    <Route path="/questions" element={<UserLayout user={user} handleUser={handleUser}/>} />
                    <Route path="/tests" element={<UserLayout user={user} handleUser={handleUser}/>} />
                </Routes>
            </Box>
        </Box>
    )
}