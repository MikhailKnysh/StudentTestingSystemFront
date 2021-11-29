import React from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import {Grid, TextField} from "@mui/material";

export const PersonalInfo = () => {
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const handleIsEditable = React.useCallback(() => setIsEditable(prevState => !prevState), []);

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
                    disabled={!isEditable}
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
                    disabled={!isEditable}
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
                            Edit
                        </Button>
                    </Grid>
            }
        </Grid>
    );
};