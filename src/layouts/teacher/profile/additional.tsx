import React from 'react';
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

export const Additional = () => {
    return (
        <Grid component="form" container spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <TextField
                    id="more1"
                    name="more1"
                    label="More info"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="img"
                    name="img"
                    label="Maybe avatar"
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