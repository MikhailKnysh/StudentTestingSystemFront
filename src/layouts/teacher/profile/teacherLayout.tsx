import React from "react";
import Box from "@mui/material/Box";
import {TeachersDrawer} from "../../../components/Drawer/teachersDrawer";
import Tabs from "@mui/material/Tabs";
import {Tab, Typography} from "@mui/material";
import {DrawerHeader} from "../../../components/Drawer/DrawerHeader";
import {PersonalInfo} from "./personalInfo";
import {Security} from "../../../components/PasswordInput/security";
import {Additional} from "./additional";
import {User} from "../config";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TeacherLayout = (props: any) => {
    const {user, handleUser} = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <TeachersDrawer user={user} handleUser={handleUser}/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Personal Info" {...a11yProps(0)} />
                        <Tab label="Security" {...a11yProps(1)} />
                        <Tab label="Additional" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <PersonalInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Security />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Additional />
                </TabPanel>
            </Box>
        </Box>
    )
}