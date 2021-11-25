import React from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import {Grid, TextField} from "@mui/material";

export const PersonalInfo = () => {
    return (
        <Grid component="form" container spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <TextField
                    id="first-name"
                    name="first-name"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="last-name"
                    name="last-name"
                    label="Last name"
                    fullWidth
                    variant="outlined"
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
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="confirm-email"
                    name="confirm-email"
                    label="Confirm e-mail"
                    type="email"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="about"
                    name="about"
                    label="About"
                    multiline
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sx={{ mt: '20px', textAlign: 'right' }}>
                    <Box>
                        <Button color="secondary" variant="contained" type="submit">
                            Save
                        </Button>
                        <Button sx={{ ml: '10px' }} color="secondary" variant="contained">
                            Cancel
                        </Button>
                    </Box>

                    <Button variant="outlined">
                        Edit
                    </Button>
            </Grid>
        </Grid>
    );
};