import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    show: boolean;
};

export const Loader: React.FC<Props> = (props): JSX.Element => {
    const { show } = props;

    return (
        <Backdrop sx={{ color: '#fff', position: 'absolute', zIndex: (theme) => 100 }} open={show}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};