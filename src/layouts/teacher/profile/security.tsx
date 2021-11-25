import React from 'react';
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

export const Security = () => {
    return (
        <Grid component="form" container spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <TextField
                    id="current-password"
                    name="current-password"
                    label="Current password"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="new-password"
                    name="new-password"
                    label="New password"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="confirm-password"
                    name="confirm-password"
                    label="Confirm new password"
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