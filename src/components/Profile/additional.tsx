import React from 'react';
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

export const Additional = () => {
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const handleIsEditable = React.useCallback(() => setIsEditable(prevState => !prevState), []);
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
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="img"
                    name="img"
                    label="Maybe avatar"
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