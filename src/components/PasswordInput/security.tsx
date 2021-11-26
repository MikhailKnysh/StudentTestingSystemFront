import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import { PasswordInput } from './PasswordInput';

export const Security = () => {
const [isEditable, setIsEditable] = React.useState<boolean>(false);

const handleIsEditable = React.useCallback(() => setIsEditable(prevState => !prevState), []);

    return (
        <Grid component="form" container spacing={3} sx={{maxWidth: "800px"}}>
            <Grid item xs={12}>
                <PasswordInput
                    id="current-password"
                    name="current-password"
                    autoComplete="current-password"
                    label="Current password"
                    fullWidth
                    required
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <PasswordInput
                    id={"new-password"}
                    name={"new-password"}
                    autoComplete={"new-password"}
                    label={"New password"}
                    fullWidth
                    required
                    disabled={!isEditable}
                />
            </Grid>
            <Grid item xs={12}>
                <PasswordInput
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
                            Edit
                        </Button>
                  </Grid>
            }
        </Grid>
    );
};