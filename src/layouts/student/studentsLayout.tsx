import Box from "@mui/material/Box";
import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";

export const StudentsLayout = (props: any) => {
    const {user, handleUser} = props;

    return (
        <Box sx={{display: 'flex'}}>
            <StudentsDrawer user={user} handleUser={handleUser} />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                Student's profile
            </Box>
        </Box>
    )
}