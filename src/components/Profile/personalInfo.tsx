import React from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import {Grid, TextField} from "@mui/material";
import {UseUserStateContext} from "../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {User} from "../../layouts/teacher/config";
import {userApi} from "../../APIs/userApi";
import { Loader } from '../Loader/Loader';

export const PersonalInfo = () => {
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const [userToUpdate, setUserToUpdate] = React.useState<User>(user);

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserToUpdate((prev) => ({...prev, [prop]: event.target.value}))
    }

    const handleIsEditable = React.useCallback(() => setIsEditable(prevState => !prevState), []);

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(prev => !prev)
        userApi(user.token).update(userToUpdate)
            .then(() => {
                setIsLoading(prev => !prev);
                setIsEditable(prev => !prev);
            })
            .catch(error => enqueueSnackbar(error, {variant:'error'}));
    }

    return (
        <Grid component="form" container onSubmit={handleUpdate} spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <TextField
                    id="first-name"
                    name="first-name"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                    value={userToUpdate.firstName}
                    onChange={handleChange("firstName")}
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="last-name"
                    name="last-name"
                    label="Last name"
                    fullWidth
                    variant="outlined"
                    value={userToUpdate.lastName}
                    onChange={handleChange("lastName")}
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    name="email"
                    label="E-mail"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={userToUpdate.email}
                    onChange={handleChange("email")}
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="role"
                    name="role"
                    label="User-role"
                    fullWidth
                    variant="outlined"
                    value={userToUpdate.role}
                    disabled
                />
            </Grid>
            {
                isEditable
                    ? <Grid item xs={12} sx={{ mt: '20px', textAlign: 'right' }}>
                        <Box>
                            <Button color="secondary" variant="contained" type="submit">
                                Save
                            </Button>
                            <Button sx={{ ml: '10px' }} color="secondary" variant="contained" onClick={handleIsEditable}>
                                Cancel
                            </Button>
                        </Box>
                    </Grid>
                    : <Grid item xs={12} sx={{ mt: '20px', textAlign: 'right' }}>
                        <Button variant="outlined" onClick={handleIsEditable}>
                            Edit
                        </Button>
                    </Grid>
            }
            <Loader show={isLoading} />
        </Grid>
    );
};