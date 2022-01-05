import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import {Button, Link} from "@mui/material";
import {User, userInitialState} from "../../layouts/teacher/config";
import {teacherRouting} from "../../routes/config";
import {NavLink} from "react-router-dom";
import {UseUserStateContext} from "../../Auth/AuthProvider";

const drawerWidth = 240;

export function TeachersDrawer() {
    const {handleLogout} = UseUserStateContext();

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Teachers tests platform
                    </Typography>
                    <Box sx={{flexGrow: 1}} />
                    <Link to="/" component={NavLink}>
                    <Button onClick={handleLogout} variant="outlined" sx={{borderRadius: 10, color: "white"}}>Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {teacherRouting.map(({path, name, Icon}) => (
                            <Link variant="body1" to={path} key={name} component={NavLink} color="#2F2F2F" sx={{textDecoration: 'none'}}>
                            <ListItem button key={name}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['My profile'].map((text, index) => (
                            <Link variant="body1" to="/teacher" key={index} component={NavLink} color="#2F2F2F" sx={{textDecoration: 'none'}}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}