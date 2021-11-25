import React from 'react';
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type Props = {
    required?: boolean,
    fullWidth?: boolean,
    disabled?: boolean,
    name?: string,
    label?: string,
    id?: string,
    autoComplete?: string,
}

export const PasswordInput = (
    {
        required = true,
        fullWidth = true,
        disabled = false,
        autoComplete = "current-password",
        id = "password",
        name = "password",
        label = "Password"
    } : Props) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = React.useCallback(() => setShowPassword((prevState) => !prevState), []);

    return (
        <TextField
            disabled={ disabled }
            required = { required }
            fullWidth = { fullWidth }
            name = { name }
            label = { label }
            type={showPassword ? 'text' : 'password'}
            id = { id }
            autoComplete = { autoComplete }
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
    );
};