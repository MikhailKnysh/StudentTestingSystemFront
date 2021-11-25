import Box from "@mui/material/Box";
import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";

export const StudentsLayout = (props: any) => {
    const {handleUserRole, handleAuth} = props;

    return (
        <Box sx={{display: 'flex'}}>
            <StudentsDrawer handleUserRole={handleUserRole} handleAuth={handleAuth}/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                Student's profile
            </Box>
        </Box>
    )
}