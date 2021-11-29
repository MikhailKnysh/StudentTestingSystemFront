import Box from "@mui/material/Box";
import React from "react";
import {StudentsDrawer} from "../../components/Drawer/studentsDrawer";
import {DrawerHeader} from "../../components/Drawer/DrawerHeader";
import {UserLayout} from "../../components/Profile/UserLayout";

export const StudentsLayout = (props: any) => {
    const {user, handleUser} = props;

    return (
        <Box sx={{display: 'flex'}}>
            <StudentsDrawer user={user} handleUser={handleUser} />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <UserLayout user={user} handleUser={handleUser} />
            </Box>
        </Box>
    )
}