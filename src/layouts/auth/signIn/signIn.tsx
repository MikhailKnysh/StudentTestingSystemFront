import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {User, userInitialState} from "../../teacher/config";
import Misha from "../../../image/logo512.png";
import TestPNG from "../../../image/test.png";
import Unnamed from "../../../image/unnamed.jpg";
import Parrot from "../../../image/parrot.gif";
import {Collapse, IconButton, InputAdornment} from "@mui/material";
import {Login, SignInUsers, UsersPasswords} from '../usersMock';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import { v4 as uuidv4 } from 'uuid';
import { Loader } from '../../../components/Loader/Loader';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://kupit-diplom.com.ua/">
                mishazdelal.pp.ua
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export function SignIn() {
    const [login, setLogin] = React.useState<Login>({email: uuidv4(),password:''})
    const [showPassword, setShowPassword] = React.useState(false);
    const [isPashalka, setIsPashalka] = React.useState<boolean>(false);
    const [isPashalka2, setIsPashalka2] = React.useState<boolean>(false);
    const [isPashalka3, setIsPashalka3] = React.useState<boolean>(false);
    const {user, handleAuth} = UseUserStateContext();

    const handleClickShowPassword = React.useCallback(() => setShowPassword((prevState) => !prevState), []);

    const handleChange = (prop: keyof Login) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(prev => ({...prev, [prop]: event.target.value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleAuth(login.email, login.password);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'white', width: '96px', height: '96px' }} onMouseOver={() => setIsPashalka(true)} onMouseLeave={() => setIsPashalka(false)}>
                        {isPashalka
                        ? <img src={Misha} alt='Misha' onClick={() => setIsPashalka2(true)} onMouseLeave={() => setIsPashalka2(false)}/>
                        : <img src={TestPNG} alt='Logo' width='50px' height='50px' />
                        }
                    </Avatar>
                    <Collapse in={isPashalka2}>
                        <img src={Unnamed} alt='unnamed' />
                    </Collapse>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{mb:2}}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            autoFocus
                            value={login.email}
                            onChange={handleChange('email')}
                        />
                        <TextField
                            required
                            fullWidth
                            label = 'Password'
                            type={showPassword ? 'text' : 'password'}
                            autoComplete = 'current-password'
                            value={login.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs={12}>
                                <Link to='/signup' component={NavLink} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                <Box sx={{width: '200px', height: '100px', mt: '40px'}} onClick={() => setIsPashalka3(true)} onMouseLeave={() => setIsPashalka3(false)}>
                    {isPashalka3 &&
                        <img src={Parrot} alt='parrot' width='100%' height='100%'/>
                    }
                </Box>
            </Container>
        </ThemeProvider>
    );
}