import React from 'react';
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {UseUserStateContext} from "../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {ChangedPassword} from "../../layouts/teacher/config";
import {userApi} from "../../APIs/userApi";

export const Security = () => {

    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const [changePassword, setChangePassword] = React.useState<ChangedPassword>({email: user.email, newPassword: '', oldPassword: ''});

    const handleChange = (prop: keyof ChangedPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangePassword((prev) => ({...prev, [prop]: event.target.value}))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        userApi(user.token).changePassword(changePassword)
            .then(() => {
                setIsEditable(prev => !prev);
                setIsLoading(prev => !prev);
            })
            .catch(error => enqueueSnackbar(error, {variant: 'error'}));
    }

    const handleIsEditable = React.useCallback(() => {
        setChangePassword({email: user.email, newPassword: '', oldPassword: ''});
        setIsEditable(prevState => !prevState)
    }, []);

    return (
        <Grid component="form" container onSubmit={handleSubmit} spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <TextField
                    id="current-password"
                    name="current-password"
                    autoComplete="current-password"
                    label="Current password"
                    fullWidth
                    required
                    value={changePassword.oldPassword}
                    onChange={handleChange("oldPassword")}
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id={"new-password"}
                    name={"new-password"}
                    autoComplete={"new-password"}
                    label={"New password"}
                    fullWidth
                    required
                    value={changePassword.newPassword}
                    onChange={handleChange("newPassword")}
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id={"confirm-password"}
                    name={"confirm-password"}
                    autoComplete={"confirm-password"}
                    label={"Confirm new password"}
                    fullWidth
                    required
                    disabled={!isEditable}
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
                            Change
                        </Button>
                  </Grid>
            }
        </Grid>
    );
};