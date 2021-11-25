import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import Box from "@mui/material/Box";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";
import {TeachersDrawer} from "../../components/Drawer/teachersDrawer";

export const TeacherLayout = (props: any) => {
    const {handleUserRole, handleAuth} = props;

    return (
        <Box sx={{display: 'flex'}}>
            <TeachersDrawer handleUserRole={handleUserRole} handleAuth={handleAuth}/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                Teacher's profile
            </Box>
        </Box>
    )
}